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
        fontSize: '27px',
        cursor: 'pointer',
        color:    props.value === 0 ? 'black'
                : props.value === 1 ? 'yellow'
                : props.value === 2 ? 'green'
                : props.value === 3 ? 'pink'
                : props.value === 4 ? 'red'
                : props.value === 5 ? 'gold': ""
    }
    return (
        <div style={style}>
            <span onClick={onClickHandler}>{props.selected ? <b>star</b> : 'star'}</span>
        </div>
    )
}