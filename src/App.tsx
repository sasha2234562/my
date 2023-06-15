import React, {useState} from 'react';
import './App.css';
import {Button} from "./input/button";
import {FullInput} from "./input/input";
import {UseState} from "./useState/usestate";

function App() {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message11'}
    ])
    const [newTitle, setNuwTitle] = message;

    const buttonHandlerClick = ()=>{
        const obj = {message : title}
        setMessege([obj, ...message])
        setTitle('')
    }
    const [title, setTitle] = useState('');


    return (
        <div>
            <Button name={'Click'} callBack={buttonHandlerClick}/>
            <FullInput title={title} setTitle={setTitle}/>
            <div>
                {message.map((item, index) => <li key={index}>{item.message}</li>)}
            </div>
            <UseState/>
        </div>
    )
}

export default App;
