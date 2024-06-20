import { useEffect, useReducer } from "react";
import { taskReducer } from "../taskReducer";


const initialState = [
   {
      id: new Date().getTime() * 3,
      desc: 'Ir al supermercado CMHEL',
      done: false,

   },
   {
      id: new Date().getTime() * 2,
      desc: 'Planear el viaje a la playa CMHEL',
      done: false
   },
   {
      id: new Date().getTime() * 4,
      desc: 'Ir al concierto de JV CMHEL',
      done: true
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

   
   return {
      tasks,
      onAddTask,
   }
}
