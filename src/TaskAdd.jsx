import { useState } from "react"

export const TaskAdd = () => {

   const [ inputValue, setInputValue ] = useState('');

   const onInputChange = ({ target }) => {
      setInputValue( target.value );
   };

   const onSubmit = ( event ) => {
      event.preventDefault();

      const newTask = inputValue.trim();
      console.log( newTask );
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
      </form>
   )
}
