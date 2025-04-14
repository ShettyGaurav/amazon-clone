"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/navbar.css"

export default function Navbar() {
  const { cartItems } = useCart()
  const [showMenu, setShowMenu] = useState(false)

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <h1>
              amazon<span className="logo-highlight">clone</span>
            </h1>
          </Link>

          <div className="location">
            <div className="location-icon">📍</div>
            <div className="location-text">
              <span className="location-deliver">Deliver to</span>
              <span className="location-name">New York 10001</span>
            </div>
          </div>
        </div>

        <div className="search-container">
          <select className="search-dropdown">
            <option>All</option>
            <option>Electronics</option>
            <option>Computers</option>
            <option>Home</option>
            <option>Books</option>
          </select>
          <input type="text" className="search-input" placeholder="Search products..." />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <div className="navbar-right">
          <Link to="/account" className="nav-link">
            <div className="nav-option">
              <span className="nav-line-1">Hello, Sign in</span>
              <span className="nav-line-2">Account & Lists</span>
            </div>
          </Link>

          <Link to="/orders" className="nav-link">
            <div className="nav-option">
              <span className="nav-line-1">Returns</span>
              <span className="nav-line-2">& Orders</span>
            </div>
          </Link>

          <Link to="/cart" className="nav-link cart-link">
            <div className="cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
              <span className="cart-count">{totalItems}</span>
            </div>
            <span className="nav-line-2">Cart</span>
          </Link>
        </div>

        <button className="mobile-menu-button" onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="sub-navbar">
        <button className="all-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span>All</span>
        </button>
        <nav className="category-nav">
          <a href="#" className="category-link">
            Today's Deals
          </a>
          <a href="#" className="category-link">
            Customer Service
          </a>
          <a href="#" className="category-link">
            Registry
          </a>
          <a href="#" className="category-link">
            Gift Cards
          </a>
          <a href="#" className="category-link">
            Sell
          </a>
        </nav>
      </div>

      {showMenu && (
        <div className="mobile-menu">
          <Link to="/account" className="mobile-menu-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Sign In / Account</span>
          </Link>
          <Link to="/orders" className="mobile-menu-item">
            <span>Returns & Orders</span>
          </Link>
          <div className="mobile-categories">
            <h3>Shop By Category</h3>
            <a href="#" className="mobile-category">
              Electronics
            </a>
            <a href="#" className="mobile-category">
              Computers
            </a>
            <a href="#" className="mobile-category">
              Home & Kitchen
            </a>
            <a href="#" className="mobile-category">
              Books
            </a>
            <a href="#" className="mobile-category">
              Fashion
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
