import { useState } from "react";
import "./header.css";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>

            {/* ================= HEADER ================= */}

            <div className="header">

                {/* Top Header */}
                <div className="top-header">

                    {/* Left Section */}
                    <div className="left-section">

                        {/* Hamburger */}
                        <div
                            className="menu-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >

                            <i className={
                                menuOpen
                                    ? "bi bi-x-lg"
                                    : "bi bi-list"
                            }></i>

                        </div>

                        {/* Logo */}
                        <div className="logo">

                            <img
                                src="../logo.png"
                                alt="logo"
                            />

                            <h1>
                                ZOR<span>i</span>ON
                            </h1>

                        </div>

                    </div>

                    {/* Icons */}
                    <div className="icons">

                        <i className="bi bi-person-circle"></i>

                        <i className="bi bi-heart"></i>

                        <div className="cart">

                            <i className="bi bi-cart3"></i>

                            <span>0</span>

                        </div>

                    </div>

                </div>

                {/* Search Bar */}

                <div className="search-bar">

                    <input
                        type="text"
                        placeholder="Search for products, brands and more..."
                    />

                    <button>
                        Search
                    </button>

                </div>

            </div>

            {/* ================= NAVBAR ================= */}

            <ul className={
                menuOpen
                    ? "nav-bar active"
                    : "nav-bar"
            }>

                <li>Home</li>

                <li>Categories</li>

                <li>Deals</li>

                <li>New Arrivals</li>

                <li>Best Sellers</li>

                <li>Track Order</li>

                <li>Help & Support</li>

            </ul>

        </>
    );
}

export default Header;