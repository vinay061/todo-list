import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
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
        "reminder": true
      },
      {
        "id": 3,
        "text": "Meeting on Microsoft Teams",
        "day": "June 6th at 1:30pm",
        "reminder": true
      }
]);

  return (
    <div className="container">
      <Header title=" Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
