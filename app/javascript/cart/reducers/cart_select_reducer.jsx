const SELECT_CART = 'SELECT_CART'

const cartsIndexReducer = (state, action) => {
 if (state === undefined) {
 return [];
 }
 switch (action.type) {
  case SELECT_CART:
    return action.payload;
  default:
    return state;
 }
};
export default cartsIndexReducer;
