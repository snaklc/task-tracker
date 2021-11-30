import { AddTask } from "./AddTask"
import { Task } from "./Task"

export const Tasks = ({ tasks, showAddTask, addTask, onDelete, onToggle }) => {

    return (
        <>
            {showAddTask ? <AddTask addTask={addTask} /> : ''}
            {tasks.length > 0 ? tasks.map((task) => <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
            />) : 'No tasks to show'}
        </>
    )
}

