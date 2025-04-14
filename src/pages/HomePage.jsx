import Hero from "../components/Hero"
import ProductGrid from "../components/ProductGrid"

function HomePage() {
  return (
    <>
      <Hero />
      <div className="container">
        <h2 className="section-title">Today's Deals</h2>
        <ProductGrid />
      </div>
    </>
  )
}

export default HomePage
