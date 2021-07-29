import {Component} from 'react'
import './index.css'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'

class CartItem extends Component {
  render() {
    const {cartItemData, removeFromCart, changeQuantityOfCartItem} = this.props
    const {imageUrl, price, quantity, title, brand} = cartItemData
    const totalPrice = price * quantity
    return (
      <>
        <div className="cart-item-container">
          <div className="cart-item-details-section">
            <img src={imageUrl} alt="cart" className="cart-item-img" />
            <div className="cart-item-details">
              <p className="cart-item-name">{title}</p>
              <p className="cart-item-company">By {brand}</p>
            </div>
          </div>
          <div className="quantity-container cart-quantity-container">
            <button
              type="button"
              className="quantity-controller-button"
              onClick={() => changeQuantityOfCartItem(cartItemData.id, 'Dec')}
              testid="minus"
            >
              <BsDashSquare className="quantity-controller-icon" />
            </button>
            <p className="quantity">{quantity}</p>
            <button
              type="button"
              className="quantity-controller-button"
              onClick={() => changeQuantityOfCartItem(cartItemData.id, 'Inc')}
              testid="plus"
            >
              <BsPlusSquare className="quantity-controller-icon" />
            </button>
          </div>
          <div className="cart-item-price-delete">
            <p className="cart-item-price">Rs {totalPrice}/- </p>
            <button
              className="cart-item-delete"
              type="button"
              onClick={() => removeFromCart(cartItemData)}
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default CartItem
