import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');  

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) { 
            addTodo(task);
            setTask('');  
        }
    };

    return (
        <form className="flex items-center bg-gray-800 p-4 rounded-md shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What is the task today?"
                className="flex-1 p-2 bg-gray-700 text-white rounded-md"
                value={task}
                onChange={(e) => setTask(e.target.value)}  
            />
            <button 
                className="ml-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400"
                type="submit"
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;

