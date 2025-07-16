import { useState } from "react";
import PropTypes from 'prop-types'

export default function CounterApp({value}){

   const [counter,setCounter] = useState(value)

    const handleAdd = ()=>{
        setCounter( (c)=>c+1 )
    }

    const handleSubstract = function () {
        setCounter( (c)=> c-1 ) 
    }

    const handleReset = function () {
        setCounter( value) 
    }
    
    return(
        <>
        <h1> Counter App </h1>
        <p> { counter }</p>
        <button onClick={handleAdd} >
            +1
        </button>
        <button onClick={handleSubstract}>
            -1
        </button>
        <button onClick={handleReset}>
            Reset
        </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}




