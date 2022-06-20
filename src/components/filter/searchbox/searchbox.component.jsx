import { useContext } from "react";
import { ThemeContext } from "../../../context/theme.context";
import { FilterContext } from "../../../context/filter.context";
import {SearchBoxElem,SearchBoxInput,SearchIcon} from '../filter.styles'

function SearchBox(){
    const {theme}=useContext(ThemeContext);
    const {searchText,changeText}=useContext(FilterContext);
    return(
        <SearchBoxElem dark={theme}>
            <SearchIcon dark={theme}/>
            <SearchBoxInput aria-label="Search Box" type="text"  placeholder="Search for a country" value={searchText} dark={theme} onChange={changeText}/>
        </SearchBoxElem>
    );
}
export default SearchBox;