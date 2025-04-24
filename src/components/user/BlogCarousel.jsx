import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./SliderGallery.css"; // your custom CSS
const BlogCarousel = () => {
    const slides = [
        {
            id: 1,
            title: "Majestic Mountains",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
            thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=96&q=80",
            description: "A beautiful view of majestic mountains under the golden light of sunset.",
        },
        {
            id: 2,
            title: "Ocean Vibes",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
            thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=96&q=80",
            description: "Feel the calm waves and ocean breeze on a quiet beach.",
        },
        {
            id: 3,
            title: "City Lights",
            image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1600&q=80",
            thumb: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=96&q=80",
            description: "The city comes alive with vibrant lights and energy at night.",
        },
        {
            id: 4,
            title: "Serene Forest",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
            thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=96&q=80",
            description: "A peaceful walk through the lush green forest surrounded by nature.",
        },
        {
            id: 5,
            title: "City Lights",
            image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1600&q=80",
            thumb: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=96&q=80",
            description: "The dazzling skyline with sparkling lights illuminating the streets.",
        },
    ];

    const mainSliderRef = useRef(null);
    const thumbSliderRef = useRef(null);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(mainSliderRef.current);
        setNav2(thumbSliderRef.current);
    }, []);

    return (
        <div className="slider-container">
            <div className="slider-main w-full">
                <Slider
                    asNavFor={nav2}
                    ref={mainSliderRef}
                    arrows={true}
                    fade={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="relative h-[300px] md:h-[500px] w-full"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="text-center px-6">
                                    <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                                        {slide.title}
                                    </h2>
                                    <p className="text-white mt-2 text-sm md:text-lg drop-shadow-lg">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="slider-thumbs hidden md:block">
                <Slider
                    asNavFor={nav1}
                    ref={thumbSliderRef}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    vertical={true}
                    arrows={false}
                >
                    {slides.map((slide) => (
                        <div key={slide.id}>
                            <img src={slide.thumb} alt={`Thumb ${slide.id}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogCarousel;
