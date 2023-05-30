import b from "../button/button.module.css"
import {useState} from "react";

export const RepeatOne = () => {
    let [a, setA] = useState(0)
    const Num = () => {
        setA(++a)
    }
    const NumTwo = () => {
        setA(--a )
    }
    return (
        <div className={b.button}>
            <h1>{a}</h1>
            <button onClick={Num}>Click1</button>
            <button onClick={NumTwo}>Click2</button>
        </div>
    )
}

export const MapRepeat = ()=>{
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
    return(
        <div className={b.button}>

        </div>
    )
}