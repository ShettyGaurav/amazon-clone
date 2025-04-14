"use client"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/product-card.css"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < Math.floor(rating) ? "#FFA41C" : "none"}
        stroke={i < Math.floor(rating) ? "#FFA41C" : "#A9A9A9"}
        className={i < Math.floor(rating) ? "star filled" : "star"}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ))
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img src={product.image || "https://via.placeholder.com/200"} alt={product.title} className="product-image" />
          {product.discount > 0 && <div className="discount-badge">-{product.discount}%</div>}
        </div>
      </Link>

      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-title-link">
          <h3 className="product-title">{product.title}</h3>
        </Link>

        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
            <span className="rating-value">{product.rating}</span>
          </div>
          <span className="review-count">({product.reviewCount})</span>
        </div>

        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.discount > 0 && <span className="original-price">${product.originalPrice}</span>}
        </div>

        {product.isPrime && (
          <div className="prime-badge">
            <span className="prime-text">Prime</span>
            <span className="delivery-text">FREE Delivery</span>
          </div>
        )}

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}
