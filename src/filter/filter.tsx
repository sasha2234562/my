import React, {useState} from "react";
import b from "../button/button.module.css"


export const Filter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [lokButton, setButton] = useState("all");

    let filter = money;
    if (lokButton === "Dollars") {
        filter = money.filter((item)=> item.banknots === "Dollars")
    }
    if(lokButton === "RUBLS") {
        filter = money.filter((item)=> item.banknots === "RUBLS")
    }
    function Ev(ButtonName: string) {
setButton(ButtonName)
    }
    return (
        <div>
            <ul>
                {filter.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div className={b.button}>
                <button onClick={() => Ev("ALL")}>ALL</button>
                <button onClick={() => Ev("RUBLS")}>RUBLS</button>
                <button onClick={() => Ev("Dollars")}>DOLLARS</button>
            </div>
        </div>

    )
}