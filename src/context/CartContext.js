import React from 'react'

const CartContext = React.createContext({
  cartData: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantityOfCartItem: () => {},
})

export default CartContext
