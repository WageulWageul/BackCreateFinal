import './App.css';
import '././index.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './comp/Home';
import TodoDetail from './comp/TodoDetail';
import TodoList from './comp/TodoList';
import TodoWrite from './comp/TodoWrite';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/todos/:id" element={<TodoDetail />} />
      <Route path="/write" element={<TodoWrite />} />
    </Routes>
  );
};

export default App;