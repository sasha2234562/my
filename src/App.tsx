import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Test} from "./Test/Test";
import {Post} from "./Post/Post";
import {User} from "./User/User";

function App() {
  return (
    <div className="App">

        <h1>My name is Sasha</h1>
        <Test />
        <Post />
        <User />

    </div>
  );
}

export default App;
