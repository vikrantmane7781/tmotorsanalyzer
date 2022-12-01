export const initialState = {
  user: 1234
};


const reducer = (state=initialState, action) => {
 console.log(initialState.user);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user:action.user,
      };
      
    default:
      return state;
  }
};




export default reducer;