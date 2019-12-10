import React from 'react'

const InputForm = (props) =>{
    return(
         <form onSubmit = {props.Submit}>
             <input type = 'text' 
             placeholder = "type text here"
             value = {props.value}
             onChange = {props.inputChange}
             ></input>
        </form>
    )
}
             
         


export default InputForm