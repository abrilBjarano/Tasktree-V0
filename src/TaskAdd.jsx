import { useForm } from "./hooks/useForm";

export const TaskAdd = ({ onAddTask }) => {

   const { onInputChange, onSubmit, inputValue } = useForm({ onAddTask });

   return (
      <form onSubmit={ onSubmit }>
         <input 
            type="text"
            className="form-control"
            placeholder="What needs to be done?"
            value={ inputValue }
            onChange={ onInputChange }
         />

         <button className="btn btn-success mt-2">
            Add task
         </button>
      </form>
   )
}
