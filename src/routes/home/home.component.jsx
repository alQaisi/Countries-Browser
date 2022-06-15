import {useContext} from 'react';
import { ThemeContext } from '../../context/theme.context';
import Header from '../../components/header/header.component';
import Filter from '../../components/filter/filter.component';
import CountriesContainer from '../../components/countriesContainer/countriesContainer.component';
import ScrollArrow from '../../components/scrollArrow/scrollArrow.component';
import './home.style.scss';

function Home(){
    const {theme}=useContext(ThemeContext);
    document.title = "Countries Browser";
    return(
        <div className={'main '+theme}>
            <Header/>
            <Filter/>
            <CountriesContainer/>
            <ScrollArrow/>
        </div>
    );
}
export default Home;