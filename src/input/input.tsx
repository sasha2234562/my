import React, {ChangeEvent} from "react";
type inputType = {
    title : string
    setTitle: (value : string)=>void
}

export const FullInput = (props : inputType) => {

const inputHandler= (event : ChangeEvent<HTMLInputElement>)=>{
    props.setTitle(event.currentTarget.value)
}

    return (
        <input onChange={inputHandler} value={props.title}/>
    )
}


