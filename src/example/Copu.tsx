import {FilterType, moneyType} from "./example";

type propsMoneyType = {
    filterMoney: (value: FilterType) => void;
    money: Array<moneyType>
}

export function Copu(props: propsMoneyType) {

    function buttonHandler(value: FilterType) {
        props.filterMoney(value)
    }

    return (
        <div>
            <input/>
            <button onClick={() => {
            }}>Click
            </button>
            <div>
                <button onClick={() => buttonHandler('all')}>All</button>
                <button onClick={() => buttonHandler('Dollars')}>Dollars</button>
                <button onClick={() => buttonHandler('RUBLS')}>Rubls</button>
                <div>
                    {props.money.map((item, index)=> {
                        return <li key={index}>{item.banknots}</li>
                    })}
                </div>
            </div>
        </div>
    )
}