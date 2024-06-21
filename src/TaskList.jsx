import { TaskItem } from "./TaskItem";
import backgroundImage from './assets/papper.png';

export const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {

   const listStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center calc(0% - 50px)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '70px',
      paddingRight: '82px',
   };

   const containerStyle = {
      width: '67%', // Ancho del contenedor de la lista
   };

   return (
      <div style={listStyle}>
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
            {tasks.length === 0 && <h1 className="text-center">No tasks to show</h1>}
         </div>
      </div>
   );
}