import {Stars} from "./stars";
import {useState} from "react";


export function NewStars() {

    let [value, setValue] = useState(0)

    function click(star: number) {
        setValue(star)
    }
    let classValue = {
        display: 'flex',
        margin: '5px'
    }
    return (
        <div style={classValue}>
            <Stars selected={value > 0} click={click} value={1}/>
            <Stars selected={value > 1} click={click} value={2}/>
            <Stars selected={value > 2} click={click} value={3}/>
            <Stars selected={value > 3} click={click} value={4}/>
            <Stars selected={value > 4} click={click} value={5}/>
        </div>
    )
}