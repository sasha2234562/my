import {useState} from "react";

type propsType = {
    hide: ()=> void
    title: boolean
    setTitle: (value: boolean)=>void
}

export const ExampleTitle=(props: propsType)=>{

    const onclickHandler = ()=> {
        props.hide()
    }

    return(
        <div>
            <h1 onClick={onclickHandler}>Click me now</h1>
<ol>
    <li>one</li>
    <li>two</li>
    <li>tree</li>
    <li>four</li>
    <li>five</li>
</ol>
        </div>
    )
}
