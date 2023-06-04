import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./input/input";


function App() {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message13'}
    ])
    console.log(message)
    const addMessage = (title: string) => {
        let newMessage = {message: "Dasha"}
        setMessege([ {message: title}, ...message])
    }
    // message.reverse()

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {message.map((item, index) => {
                return (
                    <div key={index}>{item.message}</div>
                )
            })}

        </div>
    )
}

export default App;
