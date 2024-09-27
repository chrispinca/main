import React, {useState, useEffect, useRef} from "react";
import couchBanner from "../assets/couchBanner.jpg";
import couch1 from "../assets/couch1.jpg";
import couch2 from "../assets/couch2.jpg";

function Hero() {
    const slides = [
        { id: 1, image: couch1, text: "Amazing Deals Await!" },
        { id: 2, image: couch2, text: "Shop the Latest Trends!" },
        { id: 3, image: couchBanner, text: "Welcome to Our Store!" }
    ];

    const intervalId = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        intervalId.current = setInterval(nextSlide, 8000);

        return () => {
            clearInterval(intervalId.current);
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    

    return (
        <div className = "hero" >
            <div className = "hero-slide">
                {slides.map((slide, index) => (
                        <img 
                            key={slide.id} 
                            className={`hero-image ${index === currentSlide ? 'active' : ''}`} 
                            src={slide.image} 
                            alt={slide.text}
                        />
                    ))}
                        
                <div className = "hero-text" >
                    <h2>{slides[currentSlide].text}</h2>
                </div>
                <button className = "prev" onClick = {prevSlide}>⬅</button>
                <button className = "next" onClick = {nextSlide}>➡</button>
            </div>
        </div>
    )
}

export default Hero;