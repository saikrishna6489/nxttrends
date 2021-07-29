import React from 'react'

const CartContext = React.createContext({
  cartData: [],
  changeCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantityOfCartItem: () => {},
})

export default CartContext
