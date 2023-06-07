type ButtonPropsType = {
    name : string
    collBack : ()=>void
}

export const Button = (props: ButtonPropsType) => {
const buttonHandler= ()=>{
    props.collBack()
}

    return (
        <div>
            <button onClick={buttonHandler}>{props.name}</button>
        </div>
    )
}