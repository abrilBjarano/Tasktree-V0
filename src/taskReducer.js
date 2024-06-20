export const taskReducer = ( initialState = [], action ) => {

   switch ( action.type ) {
      case 'AddTask':
         return [ ...initialState, action.payload ];

      case 'DeleteTask':
         return initialState.filter( task => task.id !== action.payload );

      case 'ToggleTask':
         return initialState.map( task => {

            if ( task.id === action.payload ) {
               return {
                  ...task,
                  done: !task.done
               }
            }
            
            return task;
         });

      default:
         return initialState;
   }
}
