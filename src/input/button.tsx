import {ChangeEvent, useState} from "react";

type newMessageType={
    newMessage: (title : string)=>void
}

export const Button = (props: newMessageType) => {
    const [title, setTitle] = useState('')

    const inputHandler= (event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }
const buttonHandler= ()=>{
    props.newMessage(title );
    setTitle('')
}

return (
    <div>
        <input onChange={inputHandler} value={title}/>
        <button onClick={buttonHandler}>Click</button>
    </div>
)
}