import React, {useState} from "react";
import b from "../button/button.module.css"
import {Homework} from "../homework/homework";

type CurrencyType = 'ALL' | 'RUBLS' | 'Dollars'
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
    let [lokButton, setButton] = useState<CurrencyType>();

    let filter = money;
    if (lokButton === "Dollars") {
        filter = money.filter((item) => item.banknots === "Dollars")
    }
    if (lokButton === "RUBLS") {
        filter = money.filter((item) => item.banknots === "RUBLS")
    }

    function Ev(ButtonName: CurrencyType) {
        setButton(ButtonName)
    }

    return (
        <Homework />
    )
}