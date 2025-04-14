import "../styles/hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-carousel">
          <img src="https://via.placeholder.com/1200x600" alt="Amazon deals" className="hero-image" />
          <div className="hero-gradient"></div>
        </div>

        <div className="hero-cards">
          <div className="hero-card">
            <h3>Top Deal</h3>
            <img src="https://via.placeholder.com/150" alt="Deal product" />
            <p>Up to 40% off on Electronics</p>
            <a href="#" className="hero-card-link">
              See more
            </a>
          </div>

          <div className="hero-card">
            <h3>Best Seller</h3>
            <img src="https://via.placeholder.com/150" alt="Best seller product" />
            <p>Top rated products this week</p>
            <a href="#" className="hero-card-link">
              Shop now
            </a>
          </div>

          <div className="hero-card">
            <h3>New Arrivals</h3>
            <img src="https://via.placeholder.com/150" alt="New arrival product" />
            <p>Check out the latest products</p>
            <a href="#" className="hero-card-link">
              Discover
            </a>
          </div>

          <div className="hero-card">
            <h3>Sign in for the best experience</h3>
            <button className="sign-in-button">Sign in securely</button>
            <a href="#" className="hero-card-link">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
