type buttonType = {
    name: string
    callBack: () => void
}

export const Button = (props: buttonType) => {
    const buttonHandler = () => {
    console.log('Nastya');
    props.callBack()
    }


    return (
        <div>
            <button onClick={buttonHandler}>{props.name}</button>
        </div>
    )
}