import { useEffect, useReducer } from "react";
import { taskReducer } from "../taskReducer";


const initialState = [
   {
      id: new Date().getTime() * 3,
      desc: 'Ir al supermercado con mi esposa bella',
      done: true,

   },
   {
      id: new Date().getTime() * 2,
      desc: 'Planear bien el viaje a Brasil con mi bebé',
      done: false
   },
   {
      id: new Date().getTime() * 4,
      desc: 'Ir al concierto de Julieta Venegas con mi hermosa esposa preciosa',
      done: false
   }
]

const init = () => {
   return JSON.parse(localStorage.getItem('tasks')) || initialState;
};


export const useTask = () => {

   const [ tasks, dispatch ] = useReducer( taskReducer, initialState, init );

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify( tasks ));
   }, [tasks]);
   

   const onAddTask = ( newTask ) => {
      const action = {
         type: 'AddTask',
         payload: newTask
      }
      dispatch( action );

   };

   const onDeleteTask = ( taskId ) => {
      const action = {
         type: 'DeleteTask',
         payload: taskId
      }
      dispatch( action );
   }

   const onToggleTask = ( id ) => {
      const action = {
         type: 'ToggleTask',
         payload: id
      }
      dispatch( action );
   }

   
   return {
      tasks,
      onAddTask,
      onDeleteTask,
      onToggleTask
   }
}
