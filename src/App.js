import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Product Meeting Appointment",
        "day": "June 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting on Development",
        "day": "June 6th at 1:30pm",
        "reminder": false
      },
      {
        "id": 3,
        "text": "Meeting on Microsoft Teams",
        "day": "June 6th at 1:30pm",
        "reminder": true
      }
]);

//add task
const addTask = (task) => {
  //console.log(task);
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

//delete Task

const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => ( task.id !== id )));
}

// Toggle on double click
const toggleReminder = (id) => {
  //console.log('toggle',id);
  setTasks(tasks.map( (task) => 
  task.id === id ? {...task, reminder: !task.reminder} : task));
}
  return (
    <div className="container">
      <Header title=" Task Tracker" showAdd={ () => setShowAddTask(!showAddTask)}
              displayAdd={showAddTask}        
      />
      {showAddTask ? <AddTask onAdd={addTask}/>
      :
      null}
      
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      :
      'No Tasks to Display' }
    </div>
  );
}

export default App;
