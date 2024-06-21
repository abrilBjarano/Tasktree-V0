export const TaskItem = ({ task, onDeleteTask, onToggleTask }) => {

   
   return (
      <li 
         className="list-group-item d-flex justify-content-between"
         key={ task.id }
      >
         <span 
            className={`align-self-center ${ ( task.done ) ?'text-decoration-line-through' : '' }`}
            onClick={ () => onToggleTask( task.id ) }
         >
            { task.desc }
         </span>

         <button 
            className="btn btn-danger"
            onClick={ () => onDeleteTask( task.id )}
         >
            X
         </button>
      </li>
   )
}
