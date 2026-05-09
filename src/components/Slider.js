import { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {

    const slides = [

        {
            image: "https://i.pinimg.com/1200x/6d/dd/64/6ddd64c3de47d48cc81a06236c50e2d6.jpg",
            title: "Mega Electronics Sale",
            desc: "Up to 70% OFF",
        },

        {
            image: "https://i.pinimg.com/736x/45/c5/d0/45c5d0d360555aa2eec6353e42d8857e.jpg",
            title: "Latest Fashion Trends",
            desc: "New Arrivals",
        },

        {
            image: "https://i.pinimg.com/736x/54/7d/f6/547df68c18d289d91f37b4550539c14e.jpg",
            title: "Furniture Collection",
            desc: "Luxury Designs",
        },

        {
            image: "https://i.pinimg.com/1200x/9e/09/0b/9e090b13260497a5d3003a9b79e5cff6.jpg",
            title: "Shoes Sale",
            desc: "Best Price Deals",
        },

        {
            image: "https://i.pinimg.com/1200x/e7/47/8b/e7478b2b186ad96baeedc1d97dc24ed2.jpg",
            title: "Beauty Products",
            desc: "Best Skincare Deals",
        },

        {
            image: "https://i.pinimg.com/736x/8b/52/a8/8b52a8be3c41999b033dbda07cde5a7e.jpg",
            title: "Sports Collection",
            desc: "Fitness Essentials",
        },

        {
            image: "https://i.pinimg.com/736x/ac/02/d8/ac02d8fe15f751ea6fcb5b1ef8ee153a.jpg",
            title: "Fashion Collection",
            desc: "Trending Styles",
        },
    ];

    const [current, setCurrent] = useState(0);

    // AUTO SLIDE

    useEffect(() => {

        const interval = setInterval(() => {

            nextSlide();

        }, 3000);

        return () => clearInterval(interval);

    });

    // NEXT

    const nextSlide = () => {

        setCurrent((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    // PREVIOUS

    const prevSlide = () => {

        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (

        <div className="slider">

            {/* IMAGE */}

            <img
                src={slides[current].image}
                alt=""
                className="slider-image"
            />

            {/* CONTENT */}

            <div className="slider-content">

                <h1>{slides[current].title}</h1>

                <p>{slides[current].desc}</p>

                <button>Shop Now</button>

            </div>

            {/* BUTTONS */}

            <button className="prev-btn" onClick={prevSlide}>
                ❮
            </button>

            <button className="next-btn" onClick={nextSlide}>
                ❯
            </button>

            {/* DOTS */}

            <div className="dots">

                {slides.map((_, index) => (

                    <span
                        key={index}
                        className={
                            current === index
                                ? "dot active"
                                : "dot"
                        }
                        onClick={() => setCurrent(index)}
                    ></span>

                ))}

            </div>

        </div>
    );
}

export default Slider;