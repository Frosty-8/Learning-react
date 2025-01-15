/* 
    useState hook allows us to track state in a function component
*/

import {useState} from 'react'

export function UseStateDemo(){

    const[numFirst,setnumFirst] = useState(0);
    const[numSecond,setnumSecond] = useState(0);
    const[sum,setVar] = useState(0);

    const updatenumFirst = (event)=>{
        setnumFirst(event.target.value);
    };

    const updatenumSecond = (event) =>{
        setnumSecond(event.target.value);
    }

    const calculate = ()=>{
        setVar(parseInt(numFirst)+parseInt(numSecond));
    }

  return (
    <div>
        <h1>Give your first element</h1>
        <input type="text" name="number1" onChange={updatenumFirst}/>

        <h1>Give your second element</h1>
        <input type="text" name = "number2" onChange={updatenumSecond} />

        <h3>Calculate</h3>
        <button onClick={calculate}>Click me</button>

        <h1>Total : {sum}</h1>


    </div>
  );
}
