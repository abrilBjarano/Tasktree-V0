export const TaskItem = ({ task, onDeleteTask }) => {

   

   return (
      <li 
         className="list-group-item d-flex justify-content-between"
         key={ task.id }
      >
         <span
            className="align-self-center"
         >
            { task.desc }
         </span>

         <button 
            className="btn btn-danger"
            onClick={ () => onDeleteTask( task.id )}
         >
            Delete
         </button>
      </li>
   )
}
