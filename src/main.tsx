import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const TodoContext = createContext([]);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
};

const TodoInput = () => {
    const { addTodo } = useContext(TodoContext);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

const App = () => {
    return (
        <TodoProvider>
            <h1>Todo List</h1>
            <TodoInput />
            <TodoList />
        </TodoProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));