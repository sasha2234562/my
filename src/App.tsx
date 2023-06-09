import React, {useEffect, useRef, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Simulate} from "react-dom/test-utils";
// import click = Simulate.click;
import {Button} from "./Button";
import {Input} from "./Input";

type TaskType = {
    userId: number
    id: number
    title: string
    complited: boolean
}

function App() {

    const [todos, setTodos] = useState<TaskType[]>([])

    // const [title, setTitle]= useState('')
let title= useRef<HTMLInputElement>(null)
    const fetchQuery = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
    }
    useEffect(() => {
        fetchQuery()
    }, [])

    const click1 = () => {
        fetchQuery()
    }
    const click2 = () => {
        setTodos([])
    }

    const todoAdd = ()=>{
        // const todo = {
        //     userId: 100200,
        //     id: todos.length +1,
        //     title: title.current.value,
        //     complited: false
        // }
        // setTodos([todo,...todos])
        if(title.current) {
            const todo = {
                userId: 100200,
                id: todos.length +1,
                title: title.current.value,
                complited: false
            }
            setTodos([todo, ...todos])
            title.current.value= ''
        }
    }
    return (
        <div className="App">
            <Button name={'Click1'} callBack={click1}/>
            <Button name={'Click2'} callBack={click2}/>
            <div>
                <Button name={'+'} callBack={todoAdd}/>
                <Input title={title} />
            </div>
            <ul>
            {todos.map((elem, index) => {


                return (
                    <li key={index}>
                        <input type={"checkbox"} checked={elem.complited}/>
                        <span>{elem.id}---</span>
                        <span>{elem.title}</span>
                    </li>
                )
            })}
        </ul>
</div>
)
    ;
}

export default App;
