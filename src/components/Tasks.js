import React from 'react'

const Tasks = ({ tasks }) => {
    
    return (
        <div>
            {tasks.map( (task) => (
                <h5 key={task.id}>{task.text}</h5>
            ))}
        </div>
    )
}

export default Tasks
