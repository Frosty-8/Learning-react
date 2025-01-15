/* 
    useState hook allows us to track state in a function component

    Purpose of useState
    useState simplifies state management in functional components by providing:
    A state variable to store the current value.
    A setter function to update the state.

    The primary purpose of the useState hook is to enable functional components to manage and update 
    stateful data. Prior to hooks, only class components in React could handle state. With useState, 
    functional components can maintain their own state, making them just as powerful and easier to use.
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
