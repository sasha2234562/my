import React, {ChangeEvent} from 'react';


type InputType = {
    title: any
    // setTitle :(title : string)=> void
}

export const Input = (props : InputType) => {
    // const  onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    //     props.setTitle(event.currentTarget.value)
    // }


    return(
        <input ref={props.title}   />
    )
}
