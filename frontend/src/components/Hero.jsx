import React, {useState} from "react";

function Hero() {
    const slides = [
        { id: 1, image: "https://wallpapers.com/images/hd/beautiful-tan-modern-furniture-1p8lqahjzvgac2vw.jpg", text: "Welcome to Our Store!" },
        { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cXVybai9OXkKrbsBAimT1v5qZIzqJpYGfDwGPCWoggl_QIn_16sImzEjlJRzG9kR2yk&usqp=CAU", text: "Amazing Deals Await!" },
        { id: 3, image: "https://img.freepik.com/premium-photo/interior-dark-living-room-with-black-walls-comfortable-black-sofa_140916-49396.jpg", text: "Shop the Latest Trends!" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className = "hero" >
            <div className = "hero-slide">
                    <img className = "hero-image" src = {slides[currentSlide].image}></img>
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