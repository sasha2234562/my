import b from "./button.module.css"

type ButtonType = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonType) => {
    const ClickOne = (name: string) => {
        props.callBack()
        console.log(name)
    }
    return (
        <div className={b.button}>
            <button onClick={() => ClickOne("Sasha")}> {props.name}</button>
        </div>
    )
}

export const ButtonTwo = (props: ButtonType) => {
    const ClickTwo = (name: string) => {
        props.callBack()
        console.log(name)
    }
    return (
        <div className={b.button}>
            <button onClick={(event) => ClickTwo("Dasha")}>{props.name}</button>
        </div>
    )
}
export const ButtonTree = (props: ButtonType) => {
    const foo1 = () => {
        props.callBack()
    }
    return (
        <div className={b.button}>
            <button onClick={foo1}>{props.name}</button>
        </div>
    )
}

export const ButtonFour = (props: ButtonType) => {
    const foo2 = (num: number) => {
        props.callBack()
        console.log(num)
    }


    return (
        <div className={b.button}>
            <button onClick={(event) => foo2(100200)}>{props.name}</button>

        </div>
    )
}


export const ButtonFive = (props: ButtonType) => {
    const foo3 = () => {
        props.callBack()
    }
    return (
        <div className={b.button}>
            <button onClick={foo3}>{props.name}</button>
        </div>
    )
}
