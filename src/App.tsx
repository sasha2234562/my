import React, {useState} from 'react';
import './App.css';
import b from "./button/button.module.css"

type FilterType = "All" | "Dollars" | "RUBLS";


function App() {
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
    let [Filter, useFilter] = useState<FilterType>('All');

    let filtMoney = money;

if (Filter === "Dollars") {
   filtMoney = money.filter((item)=> item.banknots === "Dollars")
}
    if(Filter === "RUBLS"){
      filtMoney =   money.filter((item)=> item.banknots === "RUBLS")
    }
    const ClickMoney = (buttonMoney: FilterType) => {
        useFilter(buttonMoney);
    }
    console.log(filtMoney)
    return (
        <div>
            <ul>
                {filtMoney.map((item, index) => {
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
                <button onClick={() => ClickMoney('All')}>All</button>
                <button onClick={() => ClickMoney('Dollars')}>Dollars</button>
                <button onClick={() => ClickMoney('RUBLS')}>RUBLS</button>
            </div>
        </div>
    )
}

export default App;
