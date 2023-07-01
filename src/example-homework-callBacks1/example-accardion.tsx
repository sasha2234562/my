import {ExampleTitle} from "./example-title";
import {useState} from "react";


export const ExampleAccardion = () => {

    let [title, setTitle] = useState(true)
    return (
        <div>
            <ExampleTitle title={title} setTitle={setTitle}/>
        </div>
    )
}