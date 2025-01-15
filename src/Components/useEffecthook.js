/*
    It is used to handle the side effects such as fetching data and updating DOM 
    this is where your side effect code runs
*/

import {useEffect,useState} from 'react'

export function SideEffect(){
  
  const [price,setPrice] = useState(0);
  const [total,setTotal] = useState(0);
  
  useEffect(()=>{
        setTotal(()=>price * 5);
   },[price]);


    return (
    <div>
        <h2>No. of Units is 5</h2>
        <input type="button" onClick={()=>setPrice((prv)=>prv+20)} value="Change price"/>
        <h2>Unit price : {price}</h2>
        <h2>Total price : {total}</h2>
    </div>
  )
}
