import React from "react";
import { ACTIONS } from "./App";
export default function Todo({ todo, toggleFunnel, deleteFunnel, dispatch }) {
    const styles = {
        padding: "4px",
        marginLeft: "10px",
        color: todo.completed ? "white" : "yellow",
    };
    function toggleHandler() {
        dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { isCompleted: todo.completed, id: todo.id },
        });
    }
    function deleteHandler() {
        dispatch({
            type: ACTIONS.TOGGLE_DELETE,
            payload: { id: todo.id },
        });
    }
    return (
        <div style={styles}>
            <span>{todo.name}</span>
            <button onClick={toggleHandler}>Toggle</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}
