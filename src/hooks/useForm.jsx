import { useState } from "react";

export const useForm = ({ onAddTask }) => {

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
      setInputValue('');
   };


   return {
      onInputChange,
      onSubmit,
      inputValue
   }
}
