

import b from "../button/button.module.css";
type  FT = {
    filt : Array<FiltType>
}

type FiltType = {
    banknots : string
    value : number
    number : string
}
export const Homework = (props : FT)=> {
    return(
        <>
            <ul>
                {props.filt.map((item, index) => {
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
        </>
    )
}