import { useReducer } from "react";
import { taskReducer } from "../taskReducer";


// 2. Creamos un estado inicial
const initialState = [
   {
      id: new Date().getTime() * 3,
      desc: 'Ir al supermercado con mi esposa hermosa',
      done: false,

   },
   {
      id: new Date().getTime() * 2,
      desc: 'Planear el viaje a la playa con mi esposa hermosa',
      done: false
   },
   {
      id: new Date().getTime() * 4,
      desc: 'Ir al concierto de JV con mi esposa hermosa',
      done: true
   }
]

export const useTask = () => {

   // 1. Usamos el useReducer y luego usamos el taskReducer para manejar las acciones
   const [ tasks, dispatch] = useReducer(taskReducer, initialState);

   const onAddTask = ( newTask ) => {
      const action = {
         type: 'AddTask',
         payload: newTask
      }
      dispatch( action );

   };

   
   return {
      tasks,
      onAddTask,
   }
}
