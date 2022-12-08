import "./App.css";
import { useState } from "react";
import DisplayTask from "./DisplayTask";

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);
  };
  const addTask = () =>{
    const task = {
      id: todoList.length ===0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList,task]);
  };
  const deleteTask = (id) =>{
    setTodoList(todoList.filter((task) => id===task.id ? false : true));
  };
  const completeTask = (id) =>{
    setTodoList(todoList.map((task) => {
      if(task.id===id) {return {...task,completed: true};}
      else {return task;}
    }))
  }

  return (
    <div className="App">
      <div className="w-screen addTask bg-blue-600">
        <input type="text" onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) =>{
          return <DisplayTask taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} completeTask={completeTask}/>
        })}
      </div>
      <div className="w-screen bg-black-400 text"></div>
    </div>
  );
}

export default App;