import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../contex/TaskContext'


function TaskList() {
    const {tasks}=useContext(TaskContext)


if (tasks.length ===0){
    return <h1 className='text-slate-300 text-4xl font-bold text-center'> No hay tareas aun</h1>
}
    return (
    <div className='grid grid-cols-4 gap-8 text-slate-500'>
        {
            tasks.map((task) => ( 
                <TaskCard key= {task.id} task ={task} />
            ))
        }
    </div>
  )
}

export default TaskList
