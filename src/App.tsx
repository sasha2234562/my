import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Foter} from "./site/Foter";
import {NewComponents} from "./students/NewComponents";
import {Students} from "./students/students";
import {TopCars} from "./Cars/topCars";
import {topCars} from "./Cars/Cars";

function App() {
    return (
        <div>
            <Header title={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Foter titleForFoter={'NEW FOTER'}/>
            <NewComponents students={Students}/>
            <TopCars cars={topCars}/>
        </div>
    );
}

export default App;
