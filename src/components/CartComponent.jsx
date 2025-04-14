"use client"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/cart-page.css"

export default function CartComponent() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Amazon Cart is empty</h2>
        <Link to="/" className="continue-shopping">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <button className="deselect-all" onClick={clearCart}>
            Deselect all items
          </button>
          <div className="price-label">Price</div>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.selectedColor || ""}`} className="cart-item">
              <div className="item-image">
                <img src={item.image || item.images[0]} alt={item.title} />
              </div>

              <div className="item-details">
                <Link to={`/product/${item.id}`} className="item-title">
                  {item.title}
                </Link>

                {item.selectedColor && (
                  <div className="item-color">
                    <span>Color: {item.selectedColor}</span>
                  </div>
                )}

                <div className="item-stock">
                  <span className="in-stock">In Stock</span>
                </div>

                {item.isPrime && (
                  <div className="item-prime">
                    <span className="prime-text">Prime</span>
                    <span className="delivery-text">FREE Delivery</span>
                  </div>
                )}

                <div className="item-actions">
                  <div className="quantity-selector">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value), item.selectedColor)}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          Qty: {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="action-divider">|</div>

                  <button className="delete-button" onClick={() => removeFromCart(item.id, item.selectedColor)}>
                    Delete
                  </button>

                  <div className="action-divider">|</div>

                  <button className="save-button">Save for later</button>
                </div>
              </div>

              <div className="item-price">${item.price}</div>
            </div>
          ))}
        </div>

        <div className="cart-subtotal">
          <span>
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}):
          </span>
          <span className="subtotal-price">${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="checkout-sidebar">
        <div className="checkout-card">
          {cartItems.some((item) => item.isPrime) && (
            <div className="prime-delivery-message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#007600"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="check-icon"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Your order qualifies for FREE Shipping.</span>
              <span>Choose this option at checkout.</span>
            </div>
          )}

          <div className="subtotal-summary">
            <span>
              Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}):
            </span>
            <span className="subtotal-price">${subtotal.toFixed(2)}</span>
          </div>

          <div className="gift-option">
            <input type="checkbox" id="gift" />
            <label htmlFor="gift">This order contains a gift</label>
          </div>

          <button className="proceed-to-checkout">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}
