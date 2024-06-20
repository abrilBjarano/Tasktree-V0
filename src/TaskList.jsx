import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onDeleteTask }) => {


   return (
      <ul className="list-group">
         {
            tasks.map( task => (
               <TaskItem 
                  key={ task.id } 
                  task={ task } 
                  onDeleteTask={ onDeleteTask }
               />
            ))
         }
      </ul>
   )
}
