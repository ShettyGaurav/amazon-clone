"use client"
import { useParams } from "react-router-dom"
import ProductDetail from "../components/ProductDetail"

function ProductPage() {
  const { id } = useParams()

  return (
    <div className="container">
      <ProductDetail productId={id} />
    </div>
  )
}

export default ProductPage
