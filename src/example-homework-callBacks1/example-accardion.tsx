import {ExampleTitle} from "./example-title";
import {useState} from "react";


export const ExampleAccardion = () => {
    let [title, setTitle] = useState(true)

    const hide = ()=> {
        console.log('Dasha')
    }


    return (
        <div>
            <ExampleTitle hide={hide} title={title} setTitle={setTitle}/>
        </div>
    )
}