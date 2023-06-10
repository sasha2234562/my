import {useState} from "react";

type PropsType ={
    name : string
}

export const Huky = (props : PropsType) => {
    let [a, setA] = useState(0);

    const onClickHandler = ()=> {
        setA(++a)
        console.log(++a)
    }
    const onClickHandlerTwo= ()=> {
        setA(a = 0)
    }
 return(
     <div>
         <h1>{a}</h1>
         <button onClick={onClickHandler}>{props.name}</button>
         <button onClick={onClickHandlerTwo}>O</button>
     </div>
 )
}

