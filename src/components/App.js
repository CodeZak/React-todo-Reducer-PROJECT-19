import { useState, useReducer } from "react";
import Todo from "./Todo";
const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    TOGGLE_DELETE: "toggle-delete",
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !action.payload.isCompleted };
                }
                return todo;
            });
        case ACTIONS.TOGGLE_DELETE:
            return todos.filter((todo) => {
                return todo.id !== action.payload.id;
            });
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, completed: false };
}

/* function toggleTodo(c) {
    return { id: Date.now(), name: name, completed: c };
} */
function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    console.log("todos :  ", todos);
    const [name, setName] = useState("");

    function toggleFunnel(isCompleted, id) {
        dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { isCompleted: isCompleted, id: id },
        });
    }

    function deleteFunnel(id) {
        dispatch({
            type: ACTIONS.TOGGLE_DELETE,
            payload: { id: id },
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        setName("");
        console.log(e);
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        toggleFunnel={toggleFunnel}
                        deleteFunnel={deleteFunnel}
                    />
                );
            })}
        </div>
    );
}

export default App;
