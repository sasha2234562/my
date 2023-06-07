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

    return (
        <div>
            <Button name={'Click'} collBack={()=>{}}/>
            <FullInput/>
            <div>
                {message.map((item, index) => <li key={index}>{item.message}</li>)}
            </div>
        </div>
    )
}

export default App;
