import {useState} from "react";

export function UseState() {
    let conteiner = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }
    let [status, usestatus] = useState(true)


    let on = {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '11px',
        backgroundColor: status ? 'green' : 'white',
        width: '47px',
        height: '23px',
        marginRight: '14px',
        marginTop: '27px',
        color: status ? 'white' : 'black',
        border: '3px solid yellow'

    }

    let off = {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '11px',
        backgroundColor: status ? 'white' : 'red',
        color: status ? 'black' : 'white',
        width: '47px',
        height: '23px',
        marginRight: '14px',
        marginTop: '27px',
        border: '3px solid yellow'
    }
    let range = {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: status ? 'green' : 'red',
        marginTop: '27px',

    }
    let [number, useNumber] = useState(0)
    let numberStyle = {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '53px',
        color: '#c40ce3'
    }


    function On(){
        usestatus(true)
        useNumber(++number)
    }
    function Off(){
        usestatus(false)
        useNumber(0)
    }

    return (
        <div>
            <div style={numberStyle}>{number}</div>
            <div style={conteiner}>
                <div  style={on} onClick={
                    On
                }>On</div>
                <div style={off} onClick={
                    Off
                }>Off</div>
                <div style={range}></div>
            </div>
        </div>
    )
}