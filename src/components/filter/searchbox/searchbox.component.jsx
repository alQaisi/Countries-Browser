import { useContext } from "react";
import { ThemeContext } from "../../../context/theme.context";
import { FilterContext } from "../../../context/filter.context";
import {BiSearch} from 'react-icons/bi';

function SearchBox(){
    const {theme}=useContext(ThemeContext);
    const {searchText,changeText}=useContext(FilterContext);
    return(
        <div className={"searchBox "+theme+"-searchBox"}>
            <BiSearch className={'searchIcon '+theme}/>
            <input aria-label="Search Box" type="text" className="SearchField" placeholder="Search for a country" value={searchText} onChange={changeText}/>
        </div>
    );
}
export default SearchBox;