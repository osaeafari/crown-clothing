export const addItemToCart = ( cartItems, cartItemToAdd ) => {
  const existingCartItem = cartItems.find(
    cartitem => cartitem.id === cartItemToAdd.id
  );
  
  if( existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]

};