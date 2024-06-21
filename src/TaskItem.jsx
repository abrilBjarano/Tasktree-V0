import React from 'react';

export const TaskItem = ({ task, onDeleteTask, onToggleTask }) => {
   const itemStyle = {
      backgroundColor: 'transparent',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      width: '140%', // Ancho del elemento li
      margin: '0 auto',
      display: 'flex', // Haciendo el li un contenedor flex
      alignItems: 'center', // Alineación vertical de los elementos hijos
      justifyContent: 'space-between', // Espacio entre los elementos dentro del li
      padding: '10px', // Espacio alrededor de los elementos
   };

   return (
      <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id} style={itemStyle}>
         <h6
            className={`m-0 text-muted ${task.done ? 'text-decoration-line-through' : ''}`}
            style={{ flex: '1' }} // Asegura que el h6 ocupe todo el espacio disponible
            onClick={() => onToggleTask(task.id)}
         >
            * {task.desc}
         </h6>
         <button
            className="btn btn-danger"
            onClick={() => onDeleteTask(task.id)}
         >
            X
         </button>
      </li>
   );
};
