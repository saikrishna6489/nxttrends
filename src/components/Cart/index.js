import {Component} from 'react'
import Header from '../Header'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartData, removeFromCart, changeQuantityOfCartItem} = value
          const calculateTotal = () => {
            let total = 0
            cartData.forEach(element => {
              total += element.price * element.quantity
            })
            return total
          }
          return (
            <>
              <Header />
              {!cartData.length > 0 ? (
                <div className="cart-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
                    alt="cart"
                    className="cart-img"
                  />
                </div>
              ) : (
                <>
                  <div className="cart-items-container">
                    <div className="cart-items-section">
                      {cartData.map(eachItem => (
                        <CartItem
                          cartItemData={eachItem}
                          key={`cartItem ${eachItem.id}`}
                          removeFromCart={removeFromCart}
                          changeQuantityOfCartItem={changeQuantityOfCartItem}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="order-total-container">
                    <div className="order-total-section">
                      <p className="order-total">
                        Order Total: <b>Rs {calculateTotal()} /- </b>
                      </p>
                      <p className="total-items-cart">
                        {cartData.length} items in cart
                      </p>
                      <button className="check-out-btn" type="button">
                        CheckOut
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
