import React, {ChangeEvent} from "react";
type inputPropsType={
    setTitle : (title : string)=>void
    title : string
}


export const FullInput = (props : inputPropsType) => {
    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
props.setTitle(event.currentTarget.value)
    }
    return (
        <input onChange={inputHandler} value={props.title}/>
    )
}


