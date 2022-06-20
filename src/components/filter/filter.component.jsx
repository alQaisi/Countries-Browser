import SearchBox from './searchbox/searchbox.component';
import RegionSelector from './regionSelector/regionSelector.component';
import {FilterContainer} from './filter.styles';

function Filter(){
    return(
        <FilterContainer>
            <SearchBox/>
            <RegionSelector/>
        </FilterContainer>
    );
}
export default Filter;