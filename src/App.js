import React from 'react'
import ToDoList from './components/ToDoList'
import AddItemForm from './components/AddItemForm'

function App() {
  return (
    <div id="container">
      <AddItemForm />
      <ToDoList />
    </div>
  );
}

export default App;
