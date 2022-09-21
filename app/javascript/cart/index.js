import React from 'react'
// import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createRoot } from 'react-dom/client';
// import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import setCartsReducer from './reducers/set_carts_reducer'
import selectCartReducer from './reducers/cart_select_reducer'
import setProductsReducer from './reducers/set_product_reducer'
import CartIndex from './containers/cart_index'
import CartShow from './containers/cart_show'

const reducers = combineReducers({
  carts: setCartsReducer,
  selectedCart: selectCartReducer,
  products: setProductsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(reduxPromise)
  ));

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cart_list');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    <Provider store={store}>
      <CartIndex/>
      <CartShow/>
    </Provider>
  )
})
