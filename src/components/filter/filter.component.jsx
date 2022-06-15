import SearchBox from './searchbox/searchbox.component';
import RegionSelector from './regionSelector/regionSelector.component';
import './filter.styles.scss';

function Filter(){
    return(
        <div className='FilterContainer'>
            <SearchBox/>
            <RegionSelector/>
        </div>
    );
}
export default Filter;