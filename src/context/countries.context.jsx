import { createContext, useEffect ,useState } from "react";

export const CountriesContext=createContext({
    countries:{},
    isError:false,
});

export function CountriesProvider({children}){
    
    const [countries,setCountries]=useState([]);
    const [isError,setIsError]=useState(false);

    useEffect(()=>{
        const abortController=new AbortController();
        const fetchData=async()=>{
            try{
                setIsError(false);
                const response=await fetch("https://restcountries.com/v2/all");
                const data=await response.json();
                const countriesData={};
                data.forEach(country=>countriesData[country.alpha3Code]=country)
                setCountries(countriesData);
            }catch(err){
                if(!abortController.signal.aborted){
                    setIsError(true);
                }
            }
        }
        fetchData();
        return ()=>{
            abortController.abort();
        }
    },[]);
    const value={countries,isError};
    return(
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    );
}