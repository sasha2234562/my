import {ChangeEvent, useState} from "react";


type CreatMessage = {
    creatMessage: (title: string)=> void
}

export const Button = (props : CreatMessage) => {
    let [title, seTitle] = useState('');
    const OnChangeHandler= (event: ChangeEvent<HTMLInputElement>)=>{
        seTitle(event.currentTarget.value)
    }
    const onClickButtonHandler=()=>{
        props.creatMessage(title);
seTitle('')
    }

    return (<div>
            <input onChange={OnChangeHandler} value={title}/>
            <button onClick={onClickButtonHandler}>Click</button>
        </div>
    )
}