import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {


   return (
      <ul className="list-group">
         {
            tasks.map( task => (
               <TaskItem 
                  key={ task.id } 
                  task={ task } 
                  onDeleteTask={ onDeleteTask }
                  onToggleTask={ onToggleTask }
               />
            ))
         }
      </ul>
   )
}
