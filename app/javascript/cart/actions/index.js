export function setCarts() {
 const promise = fetch('/api/v1/carts')
  .then(response => response.json());
  return {
    type: 'SET_CARTS',
    payload: promise
  }
}

export function selectCart(cart) {
  return {
    type: 'SELECT_CART',
    payload: cart
  }
}

export function setProducts() {
 const promise = fetch('/api/v1/products')
  .then(response => response.json());
  return {
    type: 'SET_PRODUCTS',
    payload: promise
  }
}
