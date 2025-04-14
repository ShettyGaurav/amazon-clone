"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("amazonCloneCart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("amazonCloneCart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart with the same color
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          (item.selectedColor === product.selectedColor || (!item.selectedColor && !product.selectedColor)),
      )

      if (existingItemIndex >= 0) {
        // If the product is already in the cart, update the quantity
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + (product.quantity || 1),
        }
        return updatedItems
      } else {
        // If the product is not in the cart, add it
        return [...prevItems, { ...product, quantity: product.quantity || 1 }]
      }
    })
  }

  const removeFromCart = (productId, selectedColor) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === productId && (item.selectedColor === selectedColor || (!item.selectedColor && !selectedColor))),
      ),
    )
  }

  const updateQuantity = (productId, quantity, selectedColor) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && (item.selectedColor === selectedColor || (!item.selectedColor && !selectedColor))
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
