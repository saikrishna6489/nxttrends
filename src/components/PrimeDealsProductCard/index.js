import {Link} from 'react-router-dom'
import './index.css'

const PrimeDealsProductCard = props => {
  const {productData} = props
  const {id, title, brand, imageUrl, rating, price} = productData

  return (
    <Link
      to={`/products/${id}`}
      className="link-item"
      style={{textDecoration: 'none'}}
    >
      <li className="prime-deals-product-item">
        <img src={imageUrl} alt="prime-product" className="thumbnail" />
        <div className="prime-product-details">
          <h1 className="title">{title}</h1>
          <p className="brand">by {brand}</p>
          <div className="product-details">
            <p className="price">Rs {price}/-</p>
            <div className="rating-container">
              <p className="rating">{rating}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="star"
              />
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default PrimeDealsProductCard
