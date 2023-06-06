import {ChangeEvent, useState} from "react";

type creatMessageType= {
    creatMessage: (title: string) => void
}

export const Button = (props: creatMessageType) => {

    const [title, setTitle] = useState('')
    console.log(title)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.creatMessage(title)
        setTitle('');
    }

    return (<div>
            <input onChange={onChangeHandler} value={title}/>
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}