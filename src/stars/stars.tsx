

type propsType = {
    selected: boolean
    click: (star: number) => void
    // steValue: (n: number)=>void
    value: number
}

export function Stars(props: propsType) {

    function onClickHandler() {
        props.click(props.value)
    }

    return (
        <div>
            {props.selected ? <span onClick={onClickHandler}><b>star</b></span> : <span onClick={onClickHandler}>star</span>}
        </div>
    )
}