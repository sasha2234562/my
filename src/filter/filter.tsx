import React, {useState} from "react";
import b from "../button/button.module.css";
type FilterType = 'All' | 'Dollars' | 'RUBLS';

export const Filter = (props : any) => {
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
    const [filt, setFilter] = useState<FilterType>('All')
    let currentMoney = money;

    if (filt == "Dollars") {
        currentMoney = money.filter((item) => item.banknots === "Dollars")
    }
    if (filt === "RUBLS") {
        currentMoney = money.filter((item) => item.banknots === "RUBLS")
    }
    return currentMoney;

    const onClockFilter = (nameButton: FilterType) => {
        console.log(nameButton);
        setFilter(nameButton)
    }
    return (
        <>
            <ul>
                {currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots} </span>
                            <span>{item.value} </span>
                            <span>{item.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div className={b.button}>
                <button onClick={() => onClockFilter("Dollars")}>Dollars</button>
                <button onClick={() => onClockFilter("RUBLS")}>RUBLS</button>
                <button onClick={() => onClockFilter("All")}>All</button>
            </div>
        </>
    )
}
