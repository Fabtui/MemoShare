const SELECT_PRODUCT = 'SELECT_PRODUCT'

const selectProductsReducer = (state, action) => {
 if (state === undefined) {
 return [];
 }
 switch (action.type) {
  case SELECT_PRODUCT:
    return action.payload;
  default:
    return state;
 }
};
export default selectProductsReducer;
