import { createContext, useEffect ,useState } from "react";

export const CountriesContext=createContext({
    countries:[],
    isError:false,
    filterdCountirs:[]
})

export function CountriesProvider({children}){
    
    const [countries,setCountries]=useState([]);
    const [isError,setIsError]=useState(false);

    useEffect(function fetchCountries(){
        fetch("https://restcountries.com/v2/all")
        .then(response=>response.json())
        .then(APIdata=>setCountries(APIdata))
        .catch(err=>{
            setIsError(true);
        })
    },[]);
    
    const value={countries,isError};
    return(
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    );
}