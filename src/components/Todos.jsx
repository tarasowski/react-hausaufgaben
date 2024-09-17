import { useState } from "react";

let todos = ["Einkaufen gehen", "Auto waschen gehen"]

function Todos() {
    const [myTodos, setMyTodos] = useState(todos)
    const [todoInputValue, setTodoInputValue] = useState("")

    function handleTodoInput(e) {
        const value = e.target.value
        setTodoInputValue(value)
    }

    function handleAddTodo() {
        // ❌ myTodos.push("hier der neue eintrage")
        const newTodos = [...myTodos, todoInputValue]
        setMyTodos(newTodos)
    }
    return (
        <div>
            <h1>Meine Todos</h1>
            <input type="text" onInput={handleTodoInput} placeholder="Mein todo" />
            <button onClick={handleAddTodo}>Todo hinzufügen</button>
            <ul>
                {myTodos.map((todo, idx) => <li key={idx}>{todo}</li>)}
            </ul>
        </div>
    )
}

export default Todos