import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Foter} from "./site/Foter";
import {NewComponents} from "./students/NewComponents";
import {Students} from "./students/students";
import {TopCars} from "./Cars/topCars";
import {topCars} from "./Cars/Cars";
import {Button, ButtonFive, ButtonFour, ButtonTree, ButtonTwo} from "./button/button";
import {HukyWraper} from "./huky/huky-wraper";
import {MapRepeat, RepeatOne} from "./repeat/repeat";

function App() {
    return (
        <div >
            <RepeatOne/>
            <MapRepeat Cars={topCars}/>
        </div>
        // const Button1Foo = (firstName : string)=> {
        //     console.log(firstName)
        // }
        // const Button2Foo = (firstName : string)=> {
        //     console.log(firstName)
        // }
        // const Button3Foo = (firstName : string)=> {
        //     console.log(firstName)
        // }
        // const Button4Foo = (firstName : string)=> {
        //     console.log(firstName)
        // }
        // const ButtonStop =()=> {
        //     console.log(("Button-Stop :)"))
        // }
        // return (
        //     <div>
        //         <HukyWraper/>
        //         <Header title={'NEW BODY'}/>
        //         <Body titleForBody={'NEW BODY'}/>
        //         <Foter titleForFoter={'NEW FOTER'}/>
        //         <NewComponents students={Students}/>
        //         <TopCars cars={topCars}/>
        //         <Button name={"MyYouTubeChanel-1"} callBack={() =>Button1Foo("Sveta")}/>
        //         <ButtonTwo name={"MyYouTubeChanel-2"} callBack={() =>Button2Foo("Masha")}/>
        //         <ButtonTree name={"Example-Click 1"} callBack={() =>Button3Foo("Dasha")}/>
        //         <ButtonFour name={"Example-Click 1"} callBack={() =>Button4Foo("Sasha")}/>
        //         <ButtonFive name={"Click-stop"} callBack={ButtonStop}/>
        //     </div>
    );
}

export default App;
