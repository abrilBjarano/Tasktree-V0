import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks }) => {


   return (
      <ul className="list-group">
         {
            tasks.map( task => {
               return <TaskItem key={ task.id } task={ task } />
            })
         }
      </ul>
   )
}
