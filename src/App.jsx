import { Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/Product"
import CartPage from "./pages/CartPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
