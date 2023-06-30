import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./input/input";
import {UseState} from "./useState/usestate";
import {Example} from "./example/example";
import {UseStateTwo} from "./useState/useStateTwo";
import {NewStars} from "./stars/noControle-Stars";
import {Button} from "./input/button";

function App() {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message11'}
    ])
    const [newTitle, setNuwTitle] = message;

    const buttonHandlerClick = () => {
        const obj = {message: title}
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
            <UseStateTwo/>
            <Example/>
            <NewStars/>
            <Button name={"Button evening"} callBack={buttonHandlerClick}/>
        </div>
    )
}

export default App;
