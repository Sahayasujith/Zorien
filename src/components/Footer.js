import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            {/* TOP */}

            <div className="footer-top">

                {/* ABOUT */}

                <div className="footer-box">

                    <h2>ZORION</h2>

                    <p>
                        Your one-stop online shopping destination for
                        electronics, fashion, groceries, beauty,
                        furniture and more.
                    </p>

                    <div className="social-icons">

                        <i className="bi bi-facebook"></i>

                        <i className="bi bi-instagram"></i>

                        <i className="bi bi-twitter-x"></i>

                        <i className="bi bi-youtube"></i>

                    </div>

                </div>

                {/* SHOP */}

                <div className="footer-box">

                    <h3>Shop</h3>

                    <ul>
                        <li>Electronics</li>
                        <li>Fashion</li>
                        <li>Mobiles</li>
                        <li>Furniture</li>
                        <li>Beauty</li>
                        <li>Groceries</li>
                    </ul>

                </div>

                {/* COMPANY */}

                <div className="footer-box">

                    <h3>Company</h3>

                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Contact Us</li>
                    </ul>

                </div>

                {/* SUPPORT */}

                <div className="footer-box">

                    <h3>Support</h3>

                    <ul>
                        <li>Help Center</li>
                        <li>Track Order</li>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>

                </div>

                {/* NEWSLETTER */}

                <div className="footer-box">

                    <h3>Newsletter</h3>

                    <p>
                        Subscribe to get latest offers and updates.
                    </p>

                    <div className="newsletter">

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <button>Subscribe</button>

                    </div>

                </div>

            </div>

            {/* MIDDLE */}

            <div className="footer-middle">

                <div className="footer-feature">
                    <i className="bi bi-truck"></i>
                    <span>Free Delivery</span>
                </div>

                <div className="footer-feature">
                    <i className="bi bi-shield-check"></i>
                    <span>Secure Payment</span>
                </div>

                <div className="footer-feature">
                    <i className="bi bi-arrow-repeat"></i>
                    <span>Easy Returns</span>
                </div>

                <div className="footer-feature">
                    <i className="bi bi-headset"></i>
                    <span>24/7 Support</span>
                </div>

            </div>

            {/* BOTTOM */}

            <div className="footer-bottom">

                <p>
                    © 2026 ZORION. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;