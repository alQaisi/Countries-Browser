import {useContext} from 'react';
import { ThemeContext } from "../../context/theme.context";
import {CountryImage,InfoContainer,CountryItem} from './country.styles.jsx';

function Country(props){
    const {theme}=useContext(ThemeContext);
    const {flag,name,population,region,capital,alpha3Code}=props;
    return(
        <CountryItem dark={theme} to={`/${alpha3Code}`}>
                <CountryImage data-alpha2code={alpha3Code} src={flag} alt={name}/>
                <InfoContainer>
                    <p className="countryName">{name}</p>
                    <p className="countryInfo">{"Population:"+population}</p>
                    <p className="countryInfo">{"Region:"+region}</p>
                    <p className="countryInfo">{"Capital:"+capital}</p>
                </InfoContainer>
        </CountryItem>
    );
}
export default Country;
