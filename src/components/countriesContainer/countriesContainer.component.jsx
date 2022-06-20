import {useContext} from 'react';
import {CountriesContext} from '../../context/countries.context';
import {FilterContext} from '../../context/filter.context';
import Country from '../country/country.component';
import Loader from '../Loader/loader.component';
import {CountriesContainerElem,Warning} from './countriesContainer.styles.jsx';

function CountriesContainer(){
    const {countries,isError}=useContext(CountriesContext);
    const {region,searchText}=useContext(FilterContext);
    const items=countries.filter(country=>(
        country.region.includes(region)&&country.name.toLowerCase().includes(searchText)
    )).map(country=>(
        <Country key={country.alpha2Code} {...country}/>
    ));
    const containerClass=isError?'Error':"";
    return(
        <CountriesContainerElem isError={isError}>
            {
                isError?
                <Warning>Pleas Try Again Later!</Warning>
                :(
                    items.length>0?
                    items
                    :<Loader/>
                )
                
            }
        </CountriesContainerElem>
    );
}
export default CountriesContainer;