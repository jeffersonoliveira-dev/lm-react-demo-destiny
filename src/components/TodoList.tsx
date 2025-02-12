import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { useTodo } from './TodoContext';

const TodoList: React.FC = () => {
  const { todos, addTodo } = useTodo();
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
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
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;