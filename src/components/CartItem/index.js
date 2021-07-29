import {Component} from 'react'
import './index.css'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'

class CartItem extends Component {
  state = {
    quantity: 1,
  }

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  render() {
    const {cartItemData} = this.props
    const {quantity} = this.state
    return (
      <>
        <div className="cart-item-container">
          <div className="cart-item-details-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
              alt="cart"
              className="cart-item-img"
            />
            <div className="cart-item-details">
              <p className="cart-item-name">Hair Dyer</p>
              <p className="cart-item-company">By Philips</p>
            </div>
          </div>
          <div className="quantity-container cart-quantity-container">
            <button
              type="button"
              className="quantity-controller-button"
              onClick={this.onDecrementQuantity}
              testid="minus"
            >
              <BsDashSquare className="quantity-controller-icon" />
            </button>
            <p className="quantity">{quantity}</p>
            <button
              type="button"
              className="quantity-controller-button"
              onClick={this.onIncrementQuantity}
              testid="plus"
            >
              <BsPlusSquare className="quantity-controller-icon" />
            </button>
          </div>
          <div className="cart-item-price-delete">
            <p className="cart-item-price">Rs 760/- </p>
            <button className="cart-item-delete" type="button">
              <AiFillDelete />
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default CartItem
