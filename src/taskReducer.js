export const taskReducer = ( initialState = [], action ) => {

   switch ( action.type ) {
      case 'AddTask':
         return [ ...initialState, action.payload ];

      default:
         return initialState;
   }
}
