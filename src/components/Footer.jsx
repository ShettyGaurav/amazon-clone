import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="back-to-top">
        <a href="#top">Back to top</a>
      </div>

      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="#">Sell products on Amazon</a>
              </li>
              <li>
                <a href="#">Sell on Amazon Business</a>
              </li>
              <li>
                <a href="#">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <a href="#">Amazon Business Card</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="#">Returns & Replacements</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <h2>
            amazon<span>clone</span>
          </h2>
        </div>

        <div className="footer-legal">
          <ul className="legal-links">
            <li>
              <a href="#">Conditions of Use</a>
            </li>
            <li>
              <a href="#">Privacy Notice</a>
            </li>
            <li>
              <a href="#">Interest-Based Ads</a>
            </li>
          </ul>
          <p className="copyright">© 2023, AmazonClone.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  )
}
