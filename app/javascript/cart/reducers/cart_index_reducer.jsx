const SET_CARTS = 'SET_CARTS'

const cartsIndexReducer = (state, action) => {
 if (state === undefined) {
 return [];
 }
 switch (action.type) {
  case SET_CARTS:
    return action.payload;
  default:
    return state;
 }
};
export default cartsIndexReducer;
