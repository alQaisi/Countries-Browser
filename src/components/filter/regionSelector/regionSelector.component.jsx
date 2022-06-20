import { useContext } from "react";
import { ThemeContext } from "../../../context/theme.context";
import { FilterContext } from "../../../context/filter.context";
import {SelectRegion} from '../filter.styles'


function RegionSelector(){
    const {theme}=useContext(ThemeContext);
    const {region,changeRegion}=useContext(FilterContext);
    return(
        <SelectRegion dark={theme} value={region} onChange={changeRegion}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
        </SelectRegion>
    );
}
export default RegionSelector;