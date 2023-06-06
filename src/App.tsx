import React, {useState} from 'react';
import './App.css';
import {Button} from "./input/button";


function App() {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message11'}
    ])
    const creatMessage = (title: string)=>{
        const newMessange = {message: title}
        setMessege([newMessange, ...message])
    }


return(
    <div>
        <Button creatMessage={creatMessage}/>
        <div>
            {message.map((item, index)=> <li key={index}>{item.message}</li>)}
        </div>
    </div>
)
}

export default App;
