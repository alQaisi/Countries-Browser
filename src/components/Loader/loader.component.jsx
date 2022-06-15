import { useContext, Fragment } from 'react';
import { ThemeContext } from '../../context/theme.context';
import { ReactComponent as DarkLoader} from '../../assets/darkLoader.svg';
import { ReactComponent as LightLoader} from '../../assets/lightLoader.svg';

function Loader(){
    const {theme}=useContext(ThemeContext);
    return(
        <Fragment>
            {
                theme==="dark"
                ?<DarkLoader className='loader'/>
                :<LightLoader className='loader'/>
            }
        </Fragment>
    );
}
export default Loader;