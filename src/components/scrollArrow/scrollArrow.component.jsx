import {useState,useContext} from 'react';
import { ThemeContext } from '../../context/theme.context';
import {IoIosArrowDropupCircle} from 'react-icons/io';
import './scrollArrow.styles.scss';

function ScrollArrow(){
    const [showScroll,setShowScroll]=useState(false);
    const {theme}=useContext(ThemeContext);
    
    function checkScrollTop(){
        if(!showScroll && window.pageYOffset>400){
            setShowScroll(true);
        }else if(showScroll && window.pageYOffset<=400){
            setShowScroll(false);
        }
    }
    function scrollTop(){
        window.scrollTo({top:0,behavior:'smooth'});
    }
    window.addEventListener('scroll',checkScrollTop);
    return(
        <IoIosArrowDropupCircle className={`scrollTop ${theme}-arrow`} onClick={scrollTop} style={{display: showScroll ? 'block' : 'none'}}/>
    );
}
export default ScrollArrow;