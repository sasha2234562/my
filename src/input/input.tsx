import React, {ChangeEvent} from "react";


export const FullInput = () => {
const inputHandler= (event: ChangeEvent<HTMLInputElement>)=>{
    console.log(event.currentTarget.value)
}
    return (
        <input onChange={inputHandler}/>
    )
}


