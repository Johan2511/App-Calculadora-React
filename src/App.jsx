/*  eslint no-eval: 0 */
//importación
import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from './components/Result'


import './App.css';


//Generación de la función del componente
const App = () => {
    //Array Destructuring
    //1er posición: valor (que inicialmente es el valor por defecto)
    //2da posición: función que me va a permitir modificar el valor por defecto
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)

    console.log("Renderización de App", items);
    //Es similar a un if
    //(esVerdader) ? (resultadoPorVerdadero) : (resultadoPorFalso) 
    const value = items.length > 0 ? items[items.length-1] : "0";
    return (
    <main className="react-calculator">
        
        <Result value={value}/>
        <Numbers onClickNumber={number => {
            console.log("Click en Number", number)
            setStack(`${stack}${number}`)
        }}/>
            
        <Functions
            onContentClear={ (clear) => {
            console.log("Content Clear", clear)
            setStack("")
        }}
            onDelete={ (borrar) => {
                if ( stack.length > 0) {
                    const newStack = stack.substring(0, stack.length - 1)
                    console.log("onDelete", borrar)
                    setStack(newStack)
                }
        }}/>
        <MathOperations 
        onClickOperation={operation => {
        console.log("operation:",operation)
        setStack(`${stack}${operation}`)
        }}
        onClickEqual={equal => {
        console.log("Equal:", equal)
        setStack(eval(stack).toString())
        }}
        />
    </main>)
}


// Exportación
export default App