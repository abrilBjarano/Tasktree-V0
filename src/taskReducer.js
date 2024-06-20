export const taskReducer = ( initialState = [], action ) => {

   switch ( action.type ) {
      case 'AddTask':
         return [ ...initialState, action.payload ];

      case 'DeleteTask':
         return initialState.filter( task => task.id !== action.payload );

      default:
         return initialState;
   }
}
