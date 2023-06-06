import React, {useState} from 'react';
import './App.css';
import {Button} from "./input/button";


function App() {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message11'}
    ])

    const creatMessange = (title: string) => {
        console.log("Masha");
        console.log(title);
        let newMessage = {message: title}
        setMessege([newMessage, ...message])
    }
    return (
        <div>
            <Button creatMessage={creatMessange}/>
            <div>
                {message.map((item, index) => <li key={index}>{item.message}</li>)}
            </div>
        </div>
    )
}

export default App;
