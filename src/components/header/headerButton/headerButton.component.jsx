import { useContext } from "react";
import { ThemeContext } from "../../../context/theme.context";
import { RiMoonLine,RiMoonFill} from "react-icons/ri";

function HeaderButton(){
    const {theme,changeTheme}=useContext(ThemeContext);
    return(
        <div className="buttonContainer" onClick={changeTheme}>
            {
                theme==='dark'
                ?<button aria-label="dark moode button" className="darkmode-button darkButton"><RiMoonFill/></button>
                :<button aria-label="dark moode button" className="darkmode-button"><RiMoonLine/></button>
            }
            <p>Dark Mode</p>
        </div>
    )
}
export default HeaderButton;