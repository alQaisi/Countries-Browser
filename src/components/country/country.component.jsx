import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../context/theme.context";
import './country.styles.scss';

function Country(props){
    const {theme}=useContext(ThemeContext);
    const {flag,name,population,region,capital,alpha3Code}=props;
    return(
        <div  className={"Country "+theme+"-Country"}>
            <Link className='countryLink' to={`/Countries-Browser/${alpha3Code}`}>
                <img data-alpha2code={alpha3Code} className='countr-item-image' src={flag} alt={name}/>
                <div className="infoContainer">
                    <p className="countryName">{name}</p>
                    <p className="countryInfo">{"Population:"+population}</p>
                    <p className="countryInfo">{"Region:"+region}</p>
                    <p className="countryInfo">{"Capital:"+capital}</p>
                </div>
            </Link>
        </div>
    );
}
export default Country;
