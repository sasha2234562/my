type propsType = {
    selected: boolean
    click: (star: number) => void
    value: number
}

export function Stars(props: propsType) {

    function onClickHandler() {
        props.click(props.value)
    }

    let style = {
        margin: '6px',
        cursor: 'pointer'
    }
    return (
        <div style={style}>
            <span onClick={onClickHandler}>{props.selected ? <b>star</b> : 'star'}</span>
        </div>
    )
}