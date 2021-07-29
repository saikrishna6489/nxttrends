import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import CartContext from './context/CartContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    cartData: [],
  }

  addToCart = cartItem => {
    const {cartData} = this.state
    let itemFound = false
    let modifiedData = cartData.map(eachData => {
      if (cartItem.id === eachData.id) {
        itemFound = true
        return {...eachData, quantity: eachData.quantity + cartItem.quantity}
      }
      return eachData
    })
    if (!itemFound) {
      modifiedData = [...modifiedData, cartItem]
    }
    this.setState({cartData: modifiedData})
  }

  removeFromCart = cartItem => {
    const {cartData} = this.state
    const modifiedData = cartData.filter(
      eachData => eachData.id !== cartItem.id,
    )
    this.setState({cartData: modifiedData})
  }

  changeQuantityOfCartItem = (id, changeOrder) => {
    const {cartData} = this.state
    const modifiedData = cartData.map(eachItem => {
      if (eachItem.id === id) {
        const {quantity} = eachItem
        let item = eachItem
        if (changeOrder === 'Inc') {
          item = {...eachItem, quantity: eachItem.quantity + 1}
        } else if (quantity > 1) {
          item = {...eachItem, quantity: eachItem.quantity - 1}
        }
        return item
      }
      return eachItem
    })

    this.setState({cartData: [...modifiedData]})
  }

  render() {
    const {cartData} = this.state
    return (
      <>
        <CartContext.Provider
          value={{
            cartData,
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            changeQuantityOfCartItem: this.changeQuantityOfCartItem,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </>
    )
  }
}

export default App
