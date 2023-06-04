import React, {ChangeEvent} from "react";

type inputType = {
    setTitle: (title: string) => void,
    title: string
}


export const FullInput = (props: inputType) => {
const onChangeHandler= (event: ChangeEvent<HTMLInputElement>)=> {
props.setTitle(event.currentTarget.value)
}

return(
    <div>
        <input title={props.title} onChange={onChangeHandler}/>
    </div>
)
}


