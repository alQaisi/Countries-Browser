import { useContext } from "react";
import { ThemeContext } from "../../../context/theme.context";
import { RiMoonLine,RiMoonFill} from "react-icons/ri";
import {ButtonContainer,Button,ButtonDark} from '../header.styles';

function HeaderButton(){
    const {theme,changeTheme}=useContext(ThemeContext);
    return(
        <ButtonContainer onClick={changeTheme}>
            {
                theme==='dark'
                ?<ButtonDark aria-label="dark moode button"><RiMoonFill/></ButtonDark>
                :<Button aria-label="dark moode button" ><RiMoonLine/></Button>
            }
            <p>Dark Mode</p>
        </ButtonContainer>
    )
}
export default HeaderButton;