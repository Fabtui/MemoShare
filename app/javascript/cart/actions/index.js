export function setCarts() {
 // TODO: Api call! For now, simulate a DB
 const promise = fetch('/api/v1/carts')
  .then(response => response.json());
  return {
    type: 'SET_CARTS',
    payload: promise
  }
}
