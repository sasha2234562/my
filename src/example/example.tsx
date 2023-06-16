import {Copu} from "./Copu";
import {useState} from "react";

export type moneyType = {
    banknots: string,
    value: number,
    number: string
}
export type FilterType = 'all' | 'Dollars' | 'RUBLS';

export function Example() {
    const [money, setMoney] = useState<Array<moneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('all');
    let [currentMoney, setCurrentMoney ] = useState(money);
    if (filter === 'Dollars') {
        currentMoney = money.filter((item) => item.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter((item) => item.banknots === 'RUBLS')
    }
    let [title, setTitle] = useState('');
    console.log(title)

    function filterMoney(value: FilterType) {
        setFilter(value)
    }

    function inputAdd() {
        const  inp  = {banknots: title, value: 100, number: ' a1234567890'};
        setCurrentMoney([inp, ...currentMoney]);
        setTitle('')
    }

    return (
        <div>
            <Copu inputAdd={inputAdd} title={title} setTitle={setTitle} money={currentMoney} filterMoney={filterMoney}/>
        </div>
    )
}