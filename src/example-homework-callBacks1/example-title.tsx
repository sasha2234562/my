type propsType = {
    title: boolean
    setTitle: (value: boolean) => void
}

export const ExampleTitle = (props: propsType) => {

    const onclickHandler = () => {
        props.setTitle(!props.title)
    }

    return (
        <div>
            <h1 onClick={onclickHandler}>Click me now</h1>
            {
                props.title &&
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>tree</li>
                    <li>four</li>
                    <li>five</li>
                </ul>
            }
        </div>
    )
}
