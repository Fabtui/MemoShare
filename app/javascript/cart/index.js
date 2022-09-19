import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createRoot } from 'react-dom/client';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cartsIndexReducer from './reducers/cart_index_reducer'
import CartIndex from './containers/cart_index'

const reducers = combineReducers({
  carts: cartsIndexReducer
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
    </Provider>
  )
})
