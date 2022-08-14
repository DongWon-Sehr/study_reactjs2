import { useState } from "react";

function AppTodo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        setTodos((curr) => [todo, ...curr]);
        setTodo("");
    };
    const onClick = (event) => {
        event.preventDefault();
        let target_index = event.target.className.split("_")[1];
        target_index = parseInt(target_index);
        setTodos((curr) => curr.filter((_, idx) => idx !== target_index));
    };

    return (
        <div>
            <div id="menu-bar">
                <a href="/">Home</a>
                <span> | </span>
                <a href="/app-default">App Default</a>
                <span> | </span>
                <a href="/app-todo">App Todo</a>
                <span> | </span>
                <a href="/app-coins">App Coins</a>
            </div>
            <h1>Todo</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={onChange}
                    placeholder="input your todo"
                />
                <button>Add ToDo</button>
            </form>
            <hr />
            <ul>
                {todos.map((item, index) => {
                    return (
                        <li className={`li_${index}`} key={index}>{item} <button onClick={onClick} className={`li_${index}`}>delete</button></li>
                    )
                })}
            </ul>
        </div>
    );
}

export default AppTodo;