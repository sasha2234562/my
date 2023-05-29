import b from "./button.module.css"

export const Button = () => {
    const ClickOne = (name: string) => {
        console.log(name)
    }
    return (
        <div className={b.button}>
            <button onClick={()=> ClickOne("Sasha") }> MyYouTubeChanel-1 </button>
        </div>
    )
}

export const ButtonTwo = () => {
    const ClickTwo = (name: string) => {
        console.log(name)
    }
    return (
        <div className={b.button}>
            <button onClick={(event)=> ClickTwo("Dasha")} >MyYouTubeChanel-2</button>
        </div>
    )
}
export const ButtonTree = ()=> {
    const foo1 = () => {
        console.log("no things or 100200" )
    }
    return(
        <div className={b.button}>
            <button onClick={foo1}>Example-Click 1</button>
        </div>
    )
}

export  const ButtonFour = ()=> {
const foo2 = (num : number)=> {
    console.log(num)
}


    return(
        <div className={b.button}>
            <button onClick={(event)=> foo2(100200)}>Example-Click 2</button>

        </div>
    )
}
