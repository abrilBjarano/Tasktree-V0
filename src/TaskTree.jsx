import { TaskAdd } from "./TaskAdd";
import { TaskList } from "./TaskList";
import { useTask } from "./hooks/useTask";

export const TaskTree = () => {

   const { tasks, onAddTask, onDeleteTask, onToggleTask, tasksCount, pendingTasks } = useTask();

   return (
      <>
         <h1>TaskTree</h1>

         <div className="row">

            <div className="col-7">
               <TaskList 
                  tasks={ tasks }
                  onDeleteTask={ onDeleteTask } 
                  onToggleTask={ onToggleTask }
                  tasksCount={ tasksCount }
                  pendingTasks={ pendingTasks }
               />
            </div>

            <div className="col-1"></div>

            <div className="col-4">
               <TaskAdd onAddTask={ onAddTask } />
            </div>
         </div>
      </>
   )
}