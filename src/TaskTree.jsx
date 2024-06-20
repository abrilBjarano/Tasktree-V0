import { TaskList } from "./TaskList";
import { useTask } from "./hooks/useTask";

export const TaskTree = () => {

   const { tasks } = useTask();
   console.log( tasks );

   return (
      <>
         <h1>TaskTree</h1>

         <div className="row">

            <div className="col-7">
               <TaskList tasks={ tasks } />
            </div>

            <div className="col-5">
               
            </div>
         </div>
      </>
   )
}
