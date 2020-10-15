import React from 'react';
import ToDoList from './components/ToDoList';
import AddItemForm from './components/AddItemForm';

function App() {
  return (
    <div>
      <AddItemForm />
      <ToDoList />
    </div>
  );
}

export default App;
