import React from "react"

const TodoItem = (props) =>{
    return(
        <li>
            <p>{props.item}{props.key}</p>
        </li>
    )
}

export default TodoItem;