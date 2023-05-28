import React from 'react';
import './App.css';
import {Test} from "./Test/Test";
import {Post} from "./Post/Post";
import {User} from "./User/User";
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Foter} from "./site/Foter";

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
            <Body/>
            <Foter/>
        </div>
        // <Header/>
        // <Body/>
        // </div>
    );
}

export default App;
