type rangePropsType = {
    style: {
        width: string,
        height: string,
        borderRadius: string,
        backgroundColor: string,
        marginTop: string,
    }
    onClick: (value: boolean) => void
}


export const Range = (props: rangePropsType) => {
    const onclickHandler = () => {
        props.onClick(false)
    }


    return (
        <div style={props.style} onClick={onclickHandler}></div>
    )
}