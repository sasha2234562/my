import i from './input.module.css';
import {useState, ChangeEvent} from "react";

type FullInputType= {
    addMessage : (title: string)=>void
}
export const FullInput = (props: FullInputType) => {
    let [title, setTitle]= useState('');
    const onChangeInputHandler= (event: ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value)
    }
    let [buttonTitle, seButtonTitle]= useState('');
    const  Click = ()=> {
        props.addMessage(title)
        setTitle('')
    }
        return (
        <div className={i.input_button}>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={Click}>Click</button>
        </div>
    )
}


