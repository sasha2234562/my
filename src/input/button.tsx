


type ButtonType= {
    name: string,
    click : ()=>void
    title : string
    setTitle : (title: string)=>void
}

export const Button = (props : ButtonType)=> {
    const  Click = ()=> {
        props.click()
    }
    return(
        <div>
            <button onClick={Click}>{props.name}</button>
        </div>
    )
}