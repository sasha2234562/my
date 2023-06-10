type HeaderType = {
    title : string
}


export const Header = (props : HeaderType) => {
    return (
        <h1>{props.title}</h1>
    )
}
