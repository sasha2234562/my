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
    let [title, setTitle] = useState('')

    const newTitle = (title : string)=> {
        const newMessage= {message: title}
        setMessege([newMessage, ...message])
    }

    const buttonHandlerClick = () => {
newTitle(title)
        setTitle('')
    }
    return (
        <div>
            <Button name={'Click'} callBack={buttonHandlerClick}/>
            <FullInput title={title} setTitle={setTitle}/>
            <div>
                {message.map((item, index) => <li key={index}>{item.message}</li>)}
            </div>
        </div>
    )
}

export default App;
