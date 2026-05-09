import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />

      <div className="home">
        <div className="home-overlay">
          <div className="home-content">
            <h1>Everything you need,</h1>
            <h1>
              <span>All in one place.</span>
            </h1>

            <p>
              Shop From 1000+ products across multiple categories.
            </p>

            <button className="explore-button">
              Explore Now
            </button>
          </div>

          <img
            src="../home-bg.png"
            className="home-bg"
            alt="Home Banner"
          />
        </div>

        {/* category cards */}

        <div className="category">
          <h2>Shop by Category</h2>

          <div className="category-cards">

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/dc/bf/cb/dcbfcbe89cb2c0ceeb4943c4ce999356.jpg"
                alt="Electronics"
              />
              <h3>Electronics</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/control1/736x/79/07/fc/7907fca25334bff9270f68ca05a84dc7.jpg"
                alt="Fashion"
              />
              <h3>Fashion</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/736x/81/95/ed/8195ed32c9ef7832209203972a555e3d.jpg"
                alt="Home Appliances"
              />
              <h3>Home Appliances</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/36/99/39/3699396c90134b79cbbae3558b02bb15.jpg"
                alt="Books"
              />
              <h3>Books</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/b8/01/ec/b801ec420edae1904bcd6f60b6151445.jpg"
                alt="Toys"
              />
              <h3>Toys</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/736x/34/a5/3d/34a53d842276977f024443894ae220cb.jpg"
                alt="Sports"
              />
              <h3>Sports</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/8c/6d/15/8c6d15b3a849b694245b03f7cec648cd.jpg"
                alt="Beauty"
              />
              <h3>Beauty</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/53/1d/3e/531d3eb2f83da2135ad03c9a2ff75a37.jpg"
                alt="Automotive"
              />
              <h3>Automotive</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/736x/0e/cd/07/0ecd0786e139032ab1002d7e4dfda72a.jpg"
                alt="Grocery"
              />
              <h3>Grocery</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/92/ea/ef/92eaef1f57afefb4fa47cbbd9f9b0f5b.jpg"
                alt="Furniture"
              />
              <h3>Furniture</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/90/0d/36/900d367b560223347a7cc94618a1e92e.jpg"
                alt="Pet Supplies"
              />
              <h3>Pet Supplies</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/35/75/d2/3575d2b839b3ff57292536ea156c1d58.jpg"
                alt="Garden"
              />
              <h3>Garden</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/1200x/f7/38/27/f73827b5a2d2ccda0ab0c137309911c6.jpg"
                alt="Office Supplies"
              />
              <h3>Office Supplies</h3>
            </div>

            <div className="category-card">
              <img
                src="https://i.pinimg.com/736x/20/a0/82/20a082c766a2bd953f7cedc74d352e20.jpg"
                alt="Music"
              />
              <h3>Music</h3>
            </div>

          </div>
        </div>

        <Slider />

        {/* best sales */}

        <div className="best-sales">
          <h2>Best Sales</h2>

          <div className="best-sales-cards">

            <div className="best-sales-card">
              <img
                src="https://i.pinimg.com/736x/1d/06/63/1d0663ec9e97e4b2d094b73df9940287.jpg"
                alt="Product 1"
              />
              <h3>Product 1</h3>
              <p>$899.99</p>
            </div>

            <div className="best-sales-card">
              <img
                src="https://i.pinimg.com/736x/2f/53/15/2f53150e9323a6a57a3cc560e0e321ec.jpg"
                alt="Product 2"
              />
              <h3>Product 2</h3>
              <p>$499.99</p>
            </div>

            <div className="best-sales-card">
              <img
                src="https://i.pinimg.com/1200x/0c/e8/29/0ce8299f7b1c845d575f949b244ea238.jpg"
                alt="Product 3"
              />
              <h3>Product 3</h3>
              <p>$299.99</p>
            </div>

          </div>
        </div>

        {/* services */}

        <div className="services">
          <h2>Our Services</h2>

          <div className="services-cards">

            <div className="services-card">
              <i className="bi bi-truck"></i>
              <h3>Free Shipping</h3>
              <p>
                Enjoy free shipping on all orders over $50.
              </p>
            </div>

            <div className="services-card">
              <i className="bi bi-arrow-counterclockwise"></i>
              <h3>Easy Returns</h3>
              <p>
                Not satisfied? Return your order within 30 days for a full refund.
              </p>
            </div>

            <div className="services-card">
              <i className="bi bi-headset"></i>
              <h3>24/7 Support</h3>
              <p>
                Our support team is here to help you anytime, anywhere.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;