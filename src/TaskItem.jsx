export const TaskItem = ({ task }) => {

   

   return (
      <li 
         key={ task.id }
         className="list-group-item d-flex justify-content-between"
      >
         <span
            className="align-self-center"
         >
            { task.desc }
         </span>
      </li>
   )
}
