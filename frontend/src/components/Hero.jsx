import React, {useState, useEffect, useRef} from "react";
import couchBanner from "../assets/couchBanner.jpg";

function Hero() {
    const slides = [
        { id: 1, image: couchBanner, text: "Welcome to Our Store!" },
        { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cXVybai9OXkKrbsBAimT1v5qZIzqJpYGfDwGPCWoggl_QIn_16sImzEjlJRzG9kR2yk&usqp=CAU", text: "Amazing Deals Await!" },
        { id: 3, image: "https://img.freepik.com/premium-photo/interior-dark-living-room-with-black-walls-comfortable-black-sofa_140916-49396.jpg", text: "Shop the Latest Trends!" },
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