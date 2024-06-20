import { useState } from "react";

export const TaskAdd = ({ onAddTask }) => {

   const [ inputValue, setInputValue ] = useState('');

   const onInputChange = ({ target }) => {
      setInputValue( target.value );
   };

   const onSubmit = ( event ) => {
      event.preventDefault();

      if ( inputValue.trim().length === 0 ) return;

      const newValue = {
         id: new Date().getTime() * 3,
         desc: inputValue.trim(),
         done: false
      }

      onAddTask( newValue );
   };

   return (
      <form onSubmit={ onSubmit }>
         <input 
            type="text"
            className="form-control"
            placeholder="What needs to be done?"
            value={ inputValue }
            onChange={ onInputChange }
         />

         <button className="btn btn-primary mt-2">
            Add task
         </button>
      </form>
   )
}
