import {FilterType, moneyType} from "./example";
import {ChangeEvent} from "react";

type propsMoneyType = {
    filterMoney: (value: FilterType) => void;
    money: Array<moneyType>
    title : string
    setTitle: (value: string)=>void
    inputAdd: ()=>void
}

export function Copu(props: propsMoneyType) {

    function buttonHandler(value: FilterType) {
        props.filterMoney(value)
    }

    function onClickHandler() {
props.inputAdd();
    }

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Click
            </button>
            <div>
                <button onClick={() => buttonHandler('all')}>All</button>
                <button onClick={() => buttonHandler('Dollars')}>Dollars</button>
                <button onClick={() => buttonHandler('RUBLS')}>Rubls</button>
                <div>
                    {props.money.map((item, index) => {
                        return <li key={index}>{item.banknots}</li>
                    })}
                </div>
            </div>
        </div>
    )
}