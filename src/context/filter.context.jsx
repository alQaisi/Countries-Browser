import { createContext, useState } from "react";

export const FilterContext=createContext({
    region:"",
    changeRegion:()=>{},
    searchText:"",
    changeText:()=>{}
});

export function FilterProvider({children}){

    const [region,setRegion]=useState("")
    const [searchText,setSearchText]=useState("");

    function changeRegion(evt){
        const {value}=evt.target;
        setRegion(value);
    }
    function changeText(evt){
        const {value}=evt.target;
        
        setSearchText(value.toLowerCase());
    }
    const value={region,changeRegion,searchText,changeText}
    return(
        <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
    );
}