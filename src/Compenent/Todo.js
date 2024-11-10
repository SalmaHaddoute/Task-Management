import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
    return (
        <div className="flex items-center justify-between p-4 mb-4 bg-gray-800 rounded-md shadow-md">
            <p 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleCompleted(task.id)} 
                className={`text-lg flex-1 ${task.completed ? 'text-gray-400' : 'text-white'}`}
            >
                {task.task}
            </p>
            <div className="flex items-center space-x-4">
                <FontAwesomeIcon 
                    icon={faPenToSquare} 
                    onClick={() => editTodo(task.id)} 
                    className="text-orange-500 cursor-pointer hover:text-orange-400"
                />
                <FontAwesomeIcon 
                    icon={faTrash} 
                    onClick={() => deleteTodo(task.id)} 
                    className="text-red-500 cursor-pointer hover:text-red-400"
                />
            </div>
        </div>
    );
};

export default Todo;




