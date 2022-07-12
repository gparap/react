/* Created by gparap (c) 2022 */

import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

//placeholder to-do list
let todos = ["todo-1", "todo-2", "todo-3", "todo-4", "todo-5",];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My To-Do List
        <AddToDo />
        <ToDoList todoList={todos} />
      </header>
    </div>
  );
}

export default App;
