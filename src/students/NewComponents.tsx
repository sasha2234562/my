type  StudetsType = {
    students : StType
}
type  StType = {
    id : number
    name : string
    age : number
}

export const NewComponents = (props : StudetsType) => {
    return (
        <>
            <h2>{props.students.id}</h2>
            <h3>{props.students.name}</h3>
            <h4>{props.students.age}</h4>
        </>
    )
}