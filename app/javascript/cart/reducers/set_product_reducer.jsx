const SET_PRODUCTS = 'SET_PRODUCTS'

const setProductsReducer = (state, action) => {
 if (state === undefined) {
 // Reducer initialisation
 return [];
 }
 // TODO: handle some actions
 switch (action.type) {
  case SET_PRODUCTS:
    return action.payload;
  default:
    return state;
 }
};
export default setProductsReducer;
