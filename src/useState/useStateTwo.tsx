import {useState} from "react";


export function UseStateTwo() {

    let [status, useStatus] = useState<boolean>(true);

    let numberStyle = {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '53px',
        color: '#c40ce3'
    }
    let conteiner = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }
    let on = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '11px',
        backgroundColor: status ? 'green' : 'white',
        width: '47px',
        height: '23px',
        marginRight: '14px',
        marginTop: '27px',
        color: status ?  'white' : 'black',
        border: '3px solid yellow'
    }
    let off = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '11px',
        backgroundColor: status ? 'white' : 'red',
        width: '47px',
        height: '23px',
        marginRight: '14px',
        marginTop: '27px',
        color: status ? 'black' : 'white',
        border: '3px solid yellow'
    }

    let [number, useNumber] = useState(0)

    function On() {
        useStatus(true)
        useNumber(++number)
    }

    function Off() {
        useStatus(false)
        useNumber(0)
    }

    let range = {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: status ? 'green' : 'red',
        marginTop: '27px',

    }
    return (
        <div>
            <div style={numberStyle}>{number}</div>
            <div style={conteiner}>
                <div style={on} onClick={
                    On
                }>On
                </div>
                <div style={off} onClick={
                    Off
                }>Off
                </div>
                <div style={range}></div>
            </div>
        </div>
    )
}