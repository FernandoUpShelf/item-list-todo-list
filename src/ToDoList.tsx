import React from 'react'

import Item from "./components/item";


const ToDoList = () => {
    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default ToDoList