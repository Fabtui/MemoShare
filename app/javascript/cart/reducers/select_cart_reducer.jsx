const SELECT_CART = 'SELECT_CART'

const selectCartReducer = (state, action) => {
 if (state === undefined) {
 return null;
 }
 switch (action.type) {
  case SELECT_CART:
    return action.payload;
  default:
    return state;
 }
};
export default selectCartReducer;
