export const taskReducer = () => {

   switch (action.type) {
      case 'AddTask':
         return [ initialState, ...action.payload ];

      default:
         return initialState;
   }
}
