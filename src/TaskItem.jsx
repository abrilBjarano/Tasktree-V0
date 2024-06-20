export const TaskItem = ({ task }) => {

   

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
      </li>
   )
}
