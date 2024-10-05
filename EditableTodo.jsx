// import React, { useState } from 'react';

// export default function EditableTodo(){
//     let [input,setInput]=useState({});
//     let [item,setItem]=useState([]);
//     let [box,setBox]=useState(false);


//     const handlechange=(e)=>{
//         setInput({[e.target.name]:e.target.value})
//     }

//     const handleClick=(e)=>{
//         e.preventDefault();
//         setItem([...item,input]);
//         setInput('');
//         return;
//     }

//     const handleBox=()=>{
//         setBox(!box);
//     }


//     return(
//         <>
//             <input name='task' value={input.task} onChange={handlechange}/>
//             <button onClick={handleClick}>Add</button>
            


//             {
//                 item.map((data,i)=>(
//                    <ul>
//                      <li key={i}>{data.task}</li>
//                      <input type='checkbox' checked={box} onChange={handleBox}/>
//                    </ul>
//                 ))
//             }
//         </>
//     )
// }


import React, { useState } from 'react';

export default function EditableTodo() {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState("");

    // Add a new task
    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === "") return;

        setTodos([...todos, { text: newTask, completed: false }]);
        setNewTask(""); // Clear input field after adding
    };

    // Mark a task as complete
    const handleToggleComplete = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Delete a task
    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    // Start editing a task
    const handleEdit = (index, text) => {
        setEditingIndex(index);
        setEditingText(text); // Set the text to be edited
    };

    // Save the edited task
    const handleSaveEdit = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, text: editingText } : todo
            )
        );
        setEditingIndex(null); // Exit editing mode
        setEditingText("");
    };

    return (
        <>
            <h2>Todo List</h2>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        {editingIndex === index ? (
                            // Editing mode: show input field
                            <>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(index)}>
                                    Save
                                </button>
                            </>
                        ) : (
                            // Regular mode: show task text with conditional styling for completed tasks
                            <>
                                <span
                                    style={{
                                        textDecoration: todo.completed
                                            ? "line-through"
                                            : "none",
                                    }}
                                >
                                    {todo.text}
                                </span>
                                <button onClick={() => handleToggleComplete(index)}>
                                    {todo.completed ? "Undo" : "Complete"}
                                </button>
                                <button onClick={() => handleEdit(index, todo.text)}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
