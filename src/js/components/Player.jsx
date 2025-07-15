import React, { useState } from "react";

const Player = ()=>{

    const[backColor, setBackColor] = useState('grey')
    const[stopColor, setStopColor] = useState('grey')
    const[playColor, setPlayColor] = useState('grey')
    const[nextColor, setNextColor] = useState('grey')

    function back(){
        if( backColor == 'grey'){
            setBackColor('green')
            setNextColor('grey')
            setStopColor('grey')
             setPlayColor('grey')
        }else{
            setBackColor('grey')
        }
    }
    function stop(){
        if( stopColor == 'grey'){
            setStopColor('green')
            setPlayColor('grey')
            setBackColor('grey')
            setNextColor('grey')
        }else{
            setStopColor('grey')
        }
    }

    function play(){
        if( playColor == 'grey'){
            setPlayColor('green')
            setBackColor('grey')
            setNextColor('grey')
             setStopColor('grey')
        }else{
            setPlayColor('grey')
        }
    }

    function next(){
        if( nextColor == 'grey'){
            setNextColor('green')
             setPlayColor('grey')
             setBackColor('grey')
              setStopColor('grey')
        }else{
            setNextColor('grey')
        }
    }
    return(
        <>
            <h1>Player</h1>
            <button onClick={back} style={{backgroundColor: backColor}} >Anterior</button>
            <button onClick={stop} style={{backgroundColor: stopColor}} >Stop</button>
            <button onClick={play} style={{backgroundColor: playColor}} >Play</button>
            <button onClick={next} style={{backgroundColor: nextColor}} >Siguiente</button>
        </>
    )
}

export default Player