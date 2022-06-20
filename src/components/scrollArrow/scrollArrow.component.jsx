import {useState,useContext} from 'react';
import { ThemeContext } from '../../context/theme.context';
import {ScrollToTop} from './scrollArrow.styles';

function ScrollArrow(){
    const [showScroll,setShowScroll]=useState("false");
    const {theme}=useContext(ThemeContext);
    
    function checkScrollTop(){
        if(showScroll==="false" && window.pageYOffset>400){
            setShowScroll("true");
        }else if(showScroll && window.pageYOffset<=400){
            setShowScroll("false");
        }
    }
    function scrollTop(){
        window.scrollTo({top:0,behavior:'smooth'});
    }
    window.addEventListener('scroll',checkScrollTop);
    return(
        <ScrollToTop  dark={theme} showscroll={showScroll} onClick={scrollTop} />
    );
}
export default ScrollArrow;