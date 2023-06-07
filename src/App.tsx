import React, {useState} from 'react';
import './App.css';
import {Button} from "./input/button";
import {FullInput} from "./input/input";


function App() {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message11'}
    ])
    const [title, setTitle] = useState('')
console.log(title)
    const  callBackButtonHandler=()=>{
        console.log("Nastya");
        const neMessage = {message : title}
        setMessege([neMessage, ...message])
    }
    return (
        <div>
            <Button name={'Click'} collBack={callBackButtonHandler}/>
            <FullInput setTitle={setTitle} title={title}/>
            <div>
                {message.map((item, index) => <li key={index}>{item.message}</li>)}
            </div>
        </div>
    )
}

export default App;
