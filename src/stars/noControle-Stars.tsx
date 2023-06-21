import {Stars} from "./stars";
import {useState} from "react";


export function NewStars() {

    let [value, setValue] = useState(1)

    return (
        <div>
            <Stars selected={value > 0}/><button onClick={()=>setValue(1)}>1</button>
            <Stars selected={value > 1}/><button onClick={()=>setValue(2)}>2</button>
            <Stars selected={value > 2}/><button onClick={()=>setValue(3)}>3</button>
            <Stars selected={value > 3}/><button onClick={()=>setValue(4)}>4</button>
            <Stars selected={value > 4}/><button onClick={()=>setValue(5)}>5</button>
        </div>
    )
}