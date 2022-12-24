import {  useContext, useState } from "react"
import {TaskContext} from '../contex/TaskContext'

function TaskForm() {
  const [title, settTareanueva] = useState ('')
  const [description, settDescription] = useState ('')
  const {createTask} = useContext(TaskContext)
  
  const handLenSubmite = (e)=>{
    e.preventDefault();
    
    createTask({
      title, 
      description
    });
    settTareanueva('')
    settDescription('')
    }
  return ( 
    
        <div className="max-w-md mx-auto " >
          <form  onSubmit={handLenSubmite} className="bg-amber-50  p-10 mb-4 rounded-md"  >
            <h1 className="text-2xl font-bold text-slate-500 mb-3"> Crear tu tarea
            </h1>
            <input className="bg-amber-100 p-3 w-full mb-2" placeholder="Escribe tu tarea"
            onChange={(e)=>{
              settTareanueva(e.target.value)
              
            }}
            value={title}
            autoFocus
            />
            
              <textarea placeholder="Añade descripcion aqui" 
              onChange={(e)=> settDescription(e.target.value)} className="bg-amber-100 p-3 w-full mb-2"
              value={description}
              >

              </textarea>
              <button  className=" bg-slate-500 px-3 py-1 text-white rounded-md hover:bg-amber-300">  Guardar
            </button>
        </form>
        </div>
       
  )
}

export default TaskForm