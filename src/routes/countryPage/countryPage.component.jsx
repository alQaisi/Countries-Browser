import { useContext,useState,useEffect,Fragment } from 'react';
import { useParams,useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/theme.context';
import {BsArrowLeft} from 'react-icons/bs';
import {BiHome} from 'react-icons/bi';
import alpa3codes from '../../assets/alpha3codes.json';
import Loader from '../../components/Loader/loader.component';
import './countryPage.styles.scss';

function CountryPage(){
    
    const navigate=useNavigate();

    const {theme}=useContext(ThemeContext);
    const {countryCode}=useParams();
    const [country,setCountry]=useState({});
    const [borders,setBorders]=useState([]);
    const [isError,setIsError]=useState(false);

    if(!alpa3codes[countryCode.toUpperCase()]){
        navigate("/");
    }

    useEffect(function fetchCountry(){
        const countryName=alpa3codes[countryCode.toUpperCase()];
        fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(res=>res.json())
        .then(data=>{
            setCountry(data[0]);
            document.title = data[0].name;
        }).catch(err=>{
            console.log(err);
            setIsError(true);
        })
    },[countryCode]);

    useEffect(function getBorders(){
        if(country.borders){
        const countryBorders=country.borders.map(border=>({name:alpa3codes[border],alpa3code:border}));
        setBorders(countryBorders);
        }
    },[country]);


    let buttons=[<p key={-1}>Border Countries</p>];
    borders.forEach((border,index)=>{
        buttons.push(
            <Link key={index} to={"/"+border.alpa3code}><button>{border.name}</button></Link>
        )
    })
        
    return(
        <div className={" CountryPage "+ theme+"-CountryPage "}>
            {
                !isError
                ?(
                    country.name
                ?(<Fragment>
                    <div className={"button-container "+theme+"-button-container"} onClick={()=>navigate(-1)}>
                        <BsArrowLeft className="back-icon"/>
                        <button className="back-button">Back</button>
                    </div>
                    <div className={"button-container "+theme+"-button-container"} onClick={()=>navigate("/")}>
                        <BiHome className="home-icon"/>
                        <button className="home-button">Home</button>
                    </div>
                    <div className="CountryCont">
                        <div className="flag">
                            <img alt={country.name} src={country.flag} />
                        </div>
                        <div className="CountryInfo">
                            <h1>{country.name}</h1>
                            <div className="infoCont">
                                <div className="info1">
                                    <p>Native Name: <span>{country.nativeName}</span></p>
                                    <p>Population: <span>{country.population}</span></p>
                                    <p>Region: <span>{country.region}</span></p>
                                    <p>Subregion: <span>{country.subregion}</span></p>
                                    <p>Capital: <span>{country.capital}</span></p>
                                </div>
                                <div className="info2">
                                    <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                                    {
                                        country.currencies!==undefined?
                                        (<p>Currencies: <span>{country.currencies.map(currency=>currency.name+",")}</span></p>)
                                        :<></>
                                    }
                                    {
                                        country.languages!==undefined?
                                        (<p>Languages: <span>{country.languages.map(language=>language.name+",")}</span></p>)
                                        :<></>
                                    }
                                </div>
                            </div>
                            {
                                buttons.length>1?
                                (<div className={"borderButton "+theme+"-borderButton"}>
                                    {buttons}
                                </div>)
                                :<></>  
                            }
                        </div>
                    </div>
                </Fragment>)
                :<Loader />
                )
                :<h1 className='warning'>Pleas Try Again Later!</h1>
            }
             
        </div>
    );
}
export default CountryPage;