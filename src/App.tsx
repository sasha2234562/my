import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./input/input";
import {Button} from "./input/button";


function App() {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message11'}
    ])
    const [title, setTitle] = useState('');
    const AddMessange = (title: string) => {
        let nesMess = {message: title}
        setMessege([nesMess, ...message])
    }
    const Click = () => {
        AddMessange(title)
    }

    return (
        <>
            <div>
                <FullInput setTitle={setTitle} title={title}/>
                <Button title={title} setTitle={setTitle} name={'Hello'} click={Click}/>
            </div>
            <div>
                {message.map((item, index) => {
                    return (
                        <div key={index}>{item.message}</div>
                    )
                })}
            </div>
        </>
    )
}

export default App;
