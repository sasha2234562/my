import {Huky} from "./huky";
import React from "react";
import h from "./huky.module.css"

export const HukyWraper = ()=> {
    return(
        <div className={h.huky}>
            <Huky name={"Click-Huky"}/>
        </div>
    )
}
