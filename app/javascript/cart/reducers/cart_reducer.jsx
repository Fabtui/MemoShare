const SET_CARTS = 'SET_CARTS'

const cartsReducer = (state, action) => {
 if (state === undefined) {
 // Reducer initialisation
 return [];
 }
 // TODO: handle some actions
 switch (action.type) {
  case SET_CARTS:
    return action.payload;
  default:
    return state;
 }
};
export default cartsReducer;
