import React from "react"
import TodoItem from "./todoItem"


const TodoList = (props) =>{
    const item = props.items.map(itemsObj =>{
        return(
            <TodoItem
            item = {itemsObj.item}
            />
        )
    })

    return(
        <div>
            <ul>{item}</ul>
        </div>
    )
}

export default TodoList;