import React from "react";

export default function Todo({ todo, toggleFunnel,deleteFunnel}) {
    const styles = {
        padding: "4px",
        marginLeft: "10px",
        color: todo.completed ? "white" : "yellow",
    };
    function toggleHandler() {
        toggleFunnel(todo.completed, todo.id);
    }
    function deleteHandler() {
        deleteFunnel(todo.id);
    }
    return (
        <div style={styles}>
            <span>{todo.name}</span>
            <button onClick={toggleHandler}>Toggle</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}
