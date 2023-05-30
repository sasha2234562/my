import b from "../button/button.module.css"
import {useState} from "react";
import {TopCars} from "../Cars/topCars";

export const RepeatOne = () => {
    let [a, setA] = useState(0)
    const Num = () => {
        setA(++a)
    }
    const NumTwo = () => {
        setA(--a)
    }
    return (
        <div className={b.button}>
            <h1>{a}</h1>
            <button onClick={Num}>Click1</button>
            <button onClick={NumTwo}>Click2</button>
        </div>
    )
}

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]
type TopCars = {
    Cars: Array<CarsType>
}
type CarsType = {
    manufacturer: string
    model: string
}
export const MapRepeat = (props : TopCars) => {

    return (
        <div className={b.button}>
            {props.Cars.map((item, index)=>{
                return(
                    // <div key={index}>
                        <table key={index}>
                            <tr>
                                <td>Emil</td>
                                <td>Tobias</td>
                                <td>Linus</td>
                            </tr>
                        </table>
                    // </div>

                )
            })}
        </div>
    )
}