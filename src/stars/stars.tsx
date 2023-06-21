type propsType = {
    selected: boolean
    click: (star: number) => void
    value: number
}

export function Stars(props: propsType) {

    function onClickHandler() {
        props.click(props.value)
    }

    return (
        <div>
            <span onClick={onClickHandler}>{props.selected ? <b>star</b> : 'star'}</span>
        </div>
    )
}