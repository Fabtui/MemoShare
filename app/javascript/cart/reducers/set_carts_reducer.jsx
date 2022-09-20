const SET_CARTS = 'SET_CARTS'

const setCartsReducer = (state, action) => {
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
export default setCartsReducer;
