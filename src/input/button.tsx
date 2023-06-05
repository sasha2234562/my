// import {ChangeEventHandler} from "React"

import {ChangeEvent, useState} from "react";

export const Button = ()=> {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message11'}
    ])

    const InputHandler= (event: ChangeEvent<HTMLInputElement>)=>{
        console.log(event.currentTarget.value)
    }
    const ButtonHandler=()=>{
        console.log("Dasha")
    }
return(
    <div>
        <input onChange={InputHandler}/>
        <button onClick={ButtonHandler}>Click</button>
    </div>
)
}