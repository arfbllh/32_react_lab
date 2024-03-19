import "./TaskManager.css";
import { useState } from "react";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [editIndex, setEditIndex] = useState(null); // State to track the index of the task being edited

    const addTask = () => {
        if (newTaskName.trim() !== '' && newTaskDescription.trim() !== '') {
            setTasks([...tasks, { name: newTaskName, description: newTaskDescription }]);
            setNewTaskName('');
            setNewTaskDescription('');
        }
    }

    const handleTaskNameChange = (event) => {
        setNewTaskName(event.target.value);
    }

    const handleTaskDescriptionChange = (event) => {
        setNewTaskDescription(event.target.value);
    }

    const startEditing = (index) => {
        setEditIndex(index);
    }

    const endEditing = () => {
        setEditIndex(null);
    }

    const isEditing = (index) => {
        return index === editIndex;
    }

    const handleTaskNameEdit = (index, value) => {
        const newTasks = [...tasks];
        newTasks[index].name = value;
        setTasks(newTasks);
    }

    const handleTaskDescriptionEdit = (index, value) => {
        const newTasks = [...tasks];
        newTasks[index].description = value;
        setTasks(newTasks);
    }

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const handleSubmit = () => {
        // Perform any necessary action on form submission
        console.log("Tasks updated:", tasks);
        setEditIndex(null); // Reset editing state after submission
    }

    return (
        <>
            <div className="container">
                <div>
                    <label htmlFor="taskName">Task Name:</label>
                    <input
                        type="text"
                        id="taskName"
                        value={newTaskName}
                        onChange={handleTaskNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="taskDescription">Task Description:</label>
                    <textarea
                        id="taskDescription"
                        value={newTaskDescription}
                        onChange={handleTaskDescriptionChange}
                    />
                </div>
                <button onClick={addTask}>Add New Task</button>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <div key={index} className="task-container">
                        <div className="task-d">
                            {isEditing(index) ? (
                                <div>
                                    <input
                                        type="text"
                                        value={task.name}
                                        onChange={(e) => handleTaskNameEdit(index, e.target.value)}
                                    />
                                    <br />
                                    <textarea
                                        value={task.description}
                                        onChange={(e) => handleTaskDescriptionEdit(index, e.target.value)}
                                    />
                                    <br />
                                    <button onClick={handleSubmit}>Submit</button>
                                </div>
                            ) : (
                                <div className="task">
                                    <div className="task-desc">
                                        <h1>{task.name}</h1>
                                        <p>{task.description}</p>
                                    </div>
                                    <div className="task-func">
                                        <button onClick={() => startEditing(index)}>Edit</button>
                                        <button className='delete-button' onClick={() => removeTask(index)}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TaskManager;
