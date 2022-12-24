import {useContext} from 'react'
import {TaskContext} from '../contex/TaskContext'

function TaskCard({task}) {
 const {deleteTask}= useContext (TaskContext)
  
  return (
    <div className='bg-violet-200 p-4 rounded-md ' >
                 <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-slate-500 text-sm'>{task.description}</p> 
            <button className='bg-slate-500 rounded-md px-2 py-1 mt-4 hover:bg-violet-500 text-emerald-50' onClick={()=>deleteTask(task.id)}> Eliminar Tarea</button>
            </div>
  )
}

export default TaskCard