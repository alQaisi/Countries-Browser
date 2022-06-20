import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import HeaderButton from './headerButton/headerButton.component';
import {HeaderContainer,HeaderTitle} from './header.styles';
// import './header.styles.scss';

function Header(){
    const {theme}=useContext(ThemeContext);
    return(
        <HeaderContainer dark={theme}>
            <HeaderTitle>Where in the world?</HeaderTitle>
            <HeaderButton />
        </HeaderContainer>
    )
}
export default Header;