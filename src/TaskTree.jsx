import { useTask } from "./hooks/useTask"

export const TaskTree = () => {

   const { tasks } = useTask();

   console.log( tasks );

   return (
      <>
         <h1>TaskTree</h1>
      </>
   )
}
