type buttonType = {
    name: string
    callBack: () => void
}

export const Button = (props: buttonType) => {
    const buttonHandler = () => {
    props.callBack()
    }


    return (
        <div>
            <button onClick={buttonHandler}>{props.name}</button>
        </div>
    )
}