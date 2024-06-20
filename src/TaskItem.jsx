export const TaskItem = ({ task }) => {

   

   return (
      <>
         <li key={ task.id }>{ task.desc }</li>
      </>
   )
}
