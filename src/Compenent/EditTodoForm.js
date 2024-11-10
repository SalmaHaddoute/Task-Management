import React, { useState } from 'react';

const EditTodoForm = ({ updateTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTodo(value, task.id); 
        setValue('');
    };

    return (
        <form className="flex items-center bg-gray-800 p-4 rounded-md shadow-md mb-4" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Update your task?"
                className="flex-1 p-2 bg-gray-700 text-white rounded-md"
                value={value}
                onChange={(e) => setValue(e.target.value)}  
            />
            <button 
                className="ml-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400"
                type="submit"
            >
                Update
            </button>
        </form>
    );
};

export default EditTodoForm;




