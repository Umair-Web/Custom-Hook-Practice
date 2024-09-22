import React,{useEffect,useState} from "react";
export default function 
// API https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
useCurrencyConvt (currency){
    const [data,setData]=useState({})
    // koi bhi component jab mount ya unmount ho or us waqt hamain kuch kam karwana ho to we  will use useEffect.
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
        console.table(data)
    },[currency])

    return data

}