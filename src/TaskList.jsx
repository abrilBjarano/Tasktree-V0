import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {


   return (
      <>
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

         { tasks.length === 0 && <h1 className="text-center">No tasks to show</h1>}
      </>
   )
}
