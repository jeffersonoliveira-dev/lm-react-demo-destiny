import React from 'react';
import ReactDOM from 'react-dom';
import { TodoProvider } from './components/TodoContext';
import TodoList from './components/TodoList';

const App: React.FC = () => (
  <TodoProvider>
    <TodoList />
  </TodoProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));