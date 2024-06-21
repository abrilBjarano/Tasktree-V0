import { TaskItem } from "./TaskItem";
import backgroundImage from './assets/papper.png';

export const TaskList = ({ tasks, onDeleteTask, onToggleTask, tasksCount, pendingTasks }) => {

   const listContainerStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center calc(0% - 50px)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '96px',
      paddingRight: '82px',
      position: 'relative',
   };

   const totalTasksStyle = {
      position: 'absolute',
      top: 0, 
      left: '130px',
      backgroundColor: 'transparent', 
      paddingTop: '50px', 
   };

   const containerStyle = {
      width: '67%', 
   };

   return (
      <div style={listContainerStyle}>
         <p style={totalTasksStyle}>Total tasks: { tasksCount() }. Pending tasks: { pendingTasks() }</p>
         <div style={containerStyle}>
            <ul className="list-group">
               {
                  tasks.map(task => (
                     <TaskItem
                        key={task.id}
                        task={task}
                        onDeleteTask={onDeleteTask}
                        onToggleTask={onToggleTask}
                     />
                  ))
               }
            </ul>
            {tasks.length === 0 && <h1 className="text-center text-danger">No tasks to show</h1>}
         </div>
      </div>
   );
}
