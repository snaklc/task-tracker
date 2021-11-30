import { useState } from "react"
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

export const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
   
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header showAddTaskForm={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      <Tasks tasks={tasks} showAddTask={showAddTask} addTask={addTask} onDelete={deleteTask} onToggle={toggleReminder} /> 
    </div>
  )
}

export default App;
