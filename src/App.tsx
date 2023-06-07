import React, {useState} from 'react';
import './App.css';
import {Button} from "./input/button";


function App() {
    let [message, setMessege] = useState([
        {message: 'Message1'},
        {message: 'Message2'},
        {message: 'Message11'}
    ])

    // const [cleatMessage, setCreatMessage] = useState('')

    const newMessage = (title : string)=>{
        const  newMess = {message: title}
        setMessege([newMess, ...message])
    }


return(
    <div>
        <Button newMessage={newMessage}/>
        <div>
            {message.map((item, index)=> <li key={index}>{item.message}</li>)}
        </div>
    </div>
)
}

export default App;
