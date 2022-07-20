import { ThemeContext } from '../../context/theme.context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dark404} from '../../assets/404dark.svg';
import { ReactComponent as Light404} from '../../assets/404normal.svg';
import './error.styles.scss';
function ErrorPage(){
    const {theme}=useContext(ThemeContext);
    return(
        <div className={`Error ${theme} `}>
            <Link to={""}><button>Go to Home</button></Link>
            {
                theme==="dark"
                ?<Dark404 className='Errorimage dark'/>
                :<Light404 className='Errorimage light'/>
            }            
        </div>
    );
}
export default ErrorPage;