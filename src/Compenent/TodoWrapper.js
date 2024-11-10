import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    const toggleCompleted = (id) => {
        setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    const editTodo = (id) => {
        setTodos(todos.map(t => 
            t.id === id ? { ...t, isEditing: true } : t
        ));
    };

    const updateTodo = (updatedTask, id) => {
        setTodos(todos.map(t => 
            t.id === id ? { ...t, task: updatedTask, isEditing: false } : t
        ));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-6">
            <h1 className="text-4xl font-bold text-orange-500 mb-6">Get Things Done</h1>
            <TodoForm addTodo={addTodo} />
            <div className="w-full max-w-xl mt-8">
                {todos.map(todo => (
                    todo.isEditing ? (
                        <EditTodoForm key={todo.id} updateTodo={updateTodo} task={todo} />
                    ) : (
                        <Todo 
                            key={todo.id} 
                            task={todo} 
                            toggleCompleted={toggleCompleted} 
                            deleteTodo={deleteTodo} 
                            editTodo={editTodo} 
                        />
                    )
                ))}
            </div>
        </div>
    );
};

export default TodoWrapper;





