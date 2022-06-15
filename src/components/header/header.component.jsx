import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import HeaderButton from './headerButton/headerButton.component';
import './header.styles.scss';

function Header(){
    const {theme}=useContext(ThemeContext);
    return(
        <header className={"headerContainer "+theme}>
            <p className="title">Where in the world?</p>
            <HeaderButton colorMode="normal"/>
        </header>
    )
}
export default Header;