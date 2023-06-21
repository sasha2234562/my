
type propsType = {
    selected  : boolean
}
export function Stars(props : propsType) {

    return(
        <div>
            {props.selected ? <span><b>star</b></span> : <span>star</span>}
            {/*<span>star</span>*/}
            {/*<span>star</span>*/}
            {/*<span>star</span>*/}
            {/*<span>star</span>*/}
        </div>
    )
}