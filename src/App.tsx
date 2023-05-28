import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Foter} from "./site/Foter";
import {NewComponents} from "./students/NewComponents";
import {Students} from "./students/students";

function App() {
    return (
        // <div className="App">
        //
        //     <h1>My name is Sasha</h1>
        //     <Test/>
        //     <Post/>
        //     <User/>
        <div>
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Foter titleForFoter={'NEW FOTER'}/>
            <NewComponents students={Students}/>
        </div>
        // <Header/>
        // <Body/>
        // </div>
    );
}

export default App;
