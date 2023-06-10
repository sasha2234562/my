type  BodyType = {
    titleForBody : string
}

export const Body= (props : BodyType) => {
    return(
        <div><b>{props.titleForBody}</b></div>
    )
}
