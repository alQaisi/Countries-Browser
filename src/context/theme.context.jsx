import { createContext, useEffect, useState } from "react";

export const ThemeContext=createContext({
    theme:"normal",
    changeTheme:()=>{}
});
export function ThemeProvider({children}){
    
    const [theme,setTheme]=useState(localStorage.getItem('theme'));
    

    function changeTheme(){
        const newTheme=theme=="dark"?'normal':'dark';
        localStorage.setItem('theme',newTheme);
        setTheme(newTheme);
    }

    const value={theme,changeTheme};

    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}