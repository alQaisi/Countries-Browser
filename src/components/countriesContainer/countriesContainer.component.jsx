import { useContext, Children } from 'react';
import {CountriesContext} from '../../context/countries.context';
import {FilterContext} from '../../context/filter.context';
import Country from '../country/country.component';
import Loader from '../Loader/loader.component';
import {CountriesContainerElem,Warning} from './countriesContainer.styles.jsx';

function CountriesContainer(){
    const {countries,isError}=useContext(CountriesContext);
    const {region,searchText}=useContext(FilterContext);
    const items=Children.toArray(Object.values(countries).filter(country=>(
        country.region.includes(region)&&country.name.toLowerCase().includes(searchText)
    )).map(country=>(
        <Country {...country}/>
    )));
    if(isError)
        return <CountriesContainerElem isError={isError}><Warning>Pleas Try Again Later!</Warning></CountriesContainerElem>;
    if(!items.length>0)
        return <Loader/>;
    return <CountriesContainerElem> { items } </CountriesContainerElem>;
}
export default CountriesContainer;