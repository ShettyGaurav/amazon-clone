"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"
import "../styles/product-detail.css"

// Sample product data - in a real app, you'd fetch this based on the ID
const getProductById = (id) => {
  return {
    id: Number.parseInt(id),
    title: "Wireless Bluetooth Headphones",
    description:
      "Experience premium sound quality with these comfortable wireless headphones. Features include noise cancellation, 30-hour battery life, and quick charging capability.",
    price: 59.99,
    rating: 4.5,
    reviewCount: 2547,
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
    ],
    discount: 15,
    originalPrice: 69.99,
    isPrime: true,
    inStock: true,
    features: [
      "Bluetooth 5.0 technology",
      "Active noise cancellation",
      "30-hour battery life",
      "Quick charging (10 min charge = 5 hours playback)",
      "Built-in microphone for calls",
      "Comfortable over-ear design",
    ],
    colors: ["Black", "White", "Blue"],
    brand: "SoundTech",
  }
}

export default function ProductDetail({ productId }) {
  const product = getProductById(productId);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={i < Math.floor(rating) ? "#FFA41C" : "none"}
        stroke={i < Math.floor(rating) ? "#FFA41C" : "#A9A9A9"}
        className={i < Math.floor(rating) ? "star filled" : "star"}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ));
  };

  return (
    <div className="product-detail">
      <div className="product-detail-grid">
        <div className="product-images">
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`image-thumbnail ${selectedImage === index ? "selected" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image || "https://via.placeholder.com/50"} alt={`${product.title} - view ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="main-image">
            <img src={product.images[selectedImage] || "https://via.placeholder.com/400"} alt={product.title} />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>

          <div className="product-brand">
            <a href="#">Visit the {product.brand} Store</a>
          </div>

          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
              <span className="rating-value">{product.rating}</span>
            </div>
            <a href="#reviews" className="review-count">
              {product.reviewCount} ratings
            </a>
          </div>

          <div className="product-price-detail">
            {product.discount > 0 && (
              <div className="discount-info">
                <span className="discount-badge">-{product.discount}%</span>
                <span className="list-price">
                  List Price: <span className="original-price">${product.originalPrice}</span>
                </span>
              </div>
            )}

            <div className="current-price-block">
              <span className="price-label">Price:</span>
              <span className="current-price">${product.price}</span>
            </div>

            {product.isPrime && (
              <div className="prime-badge-detail">
                <span className="prime-text">Prime</span>
                <span className="delivery-text">FREE Delivery</span>
              </div>
            )}
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="product-features">
            <h3>About this item</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#007600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="product-purchase">
          <div className="purchase-card">
            <div className="purchase-price">${product.price}</div>

            {product.isPrime && (
              <div className="prime-delivery">
                <span className="prime-text">Prime</span>
                <span className="delivery-text">FREE Delivery</span>
                <span className="delivery-date">Get it by Tomorrow, April 15</span>
              </div>
            )}

            <div className="stock-status">
              {product.inStock ? (
                <span className="in-stock">In Stock</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <select value={quantity} onChange={(e) => setQuantity(Number.parseInt(e.target.value))}>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {product.colors.length > 0 && (
              <div className="color-selector">
                <label>Color:</label>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? "selected" : ""}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className="add-to-cart-button-large" onClick={handleAddToCart} disabled={!product.inStock}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Add to Cart</span>
            </button>

            <button className="buy-now-button" disabled={!product.inStock}>
              Buy Now
            </button>

            <div className="secure-transaction">
              <span>Secure transaction</span>
            </div>

            <div className="wishlist-actions">
              <button className="wishlist-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>Add to List</span>
              </button>

              <button className="share-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
