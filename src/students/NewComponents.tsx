import {Students} from "./students";

type  NewConponentsType = {
    students: Array<StudentsType>
}

type  StudentsType = {
    id: number
    name: string
    age: number
}
export const NewComponents = (props: NewConponentsType) => {
    return (
        <ul>
            {props.students.map((item) => {
                return (
                    <li key={item.id}><span>{item.id}</span> <span>{item.name}</span> <span>{item.age}</span></li>
                )
            })}
        </ul>
    )
}