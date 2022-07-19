import { useContext,useState,useEffect,Fragment } from 'react';
import { useParams,useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/theme.context';
import { CountriesContext } from '../../context/countries.context';
import alpa3codes from '../../assets/alpha3codes.json';
import Loader from '../../components/Loader/loader.component';
import {
    HomeIcon,BackIcon,HeaderButton,ButtonContainer,
    BorderButton,BorderButtonContainer,
    CountryCont,Info1,Info2,
    CountryPageContainer
} from './countryPage.styles';

function CountryPage(){
    
    const navigate=useNavigate();

    const {theme}=useContext(ThemeContext);
    const {countryCode}=useParams();
    const [country,setCountry]=useState({});
    const [borders,setBorders]=useState([]);
    const {countries}=useContext(CountriesContext);

    useEffect(()=>{
        setCountry([]);
        if(!countries[countryCode.toUpperCase()]){
        navigate("/");
        }
        setTimeout(() => {
            setCountry(countries[countryCode.toUpperCase()]);
        },350);
    },[countryCode,countries,navigate]);

    useEffect(function getBorders(){
        if(country.borders){
        const countryBorders=country.borders.map(border=>({name:alpa3codes[border],alpa3code:border}));
        setBorders(countryBorders);
        }else{
            setBorders([]);
        }
    },[country]);

    let buttons=[<p key={-1}>Border Countries</p>];
    borders.forEach((border,index)=>{
        buttons.push(
            <Link key={index} to={"/"+border.alpa3code}><BorderButton>{border.name}</BorderButton></Link>
        )
    });
        
    return(
        <CountryPageContainer dark={theme}>
            {
            country.name
            ?(<Fragment>
                <ButtonContainer dark={theme} onClick={()=>navigate(-1)}>
                    <BackIcon/>
                    <HeaderButton>Back</HeaderButton>
                </ButtonContainer>
                <ButtonContainer dark={theme} onClick={()=>navigate("/")}>
                    <HomeIcon/>
                    <HeaderButton>Home</HeaderButton>
                </ButtonContainer>
                <CountryCont>
                    <div className="flag">
                        <img alt={country.name} src={country.flag} />
                    </div>
                    <div className="CountryInfo">
                        <h1>{country.name}</h1>
                        <div className="infoCont">
                            <Info1>
                                <p>Native Name: <span>{country.nativeName}</span></p>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Subregion: <span>{country.subregion}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </Info1>
                            <Info2>
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
                            </Info2>
                        </div>
                        {
                            buttons.length>1?
                            (<BorderButtonContainer dark={theme}>
                                {buttons}
                            </BorderButtonContainer>)
                            :<></>  
                        }
                    </div>
                </CountryCont>
            </Fragment>)
            :<Loader className="loader"/>
            }
        </CountryPageContainer>
    );
}
export default CountryPage;