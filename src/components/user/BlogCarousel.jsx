import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./SliderGallery.css"; // your custom CSS

const slides = [
    {
        id: 1,
        title: "Dummy Slide 1",
        image: "https://dummyimage.com/1600x600/000/fff.jpg&text=Slide+1",
        thumb: "https://dummyimage.com/96x96/fff.jpg&text=1",
    },
    {
        id: 2,
        title: "Dummy Slide 2",
        image: "https://dummyimage.com/1600x600/000/fff.jpg&text=Slide+2",
        thumb: "https://dummyimage.com/96x96/fff.jpg&text=2",
    },
    {
        id: 3,
        title: "Dummy Slide 3",
        image: "https://dummyimage.com/1600x600/000/fff.jpg&text=Slide+3",
        thumb: "https://dummyimage.com/96x96/fff.jpg&text=3",
    },
    {
        id: 4,
        title: "Dummy Slide 4",
        image: "https://dummyimage.com/1600x600/000/fff.jpg&text=Slide+4",
        thumb: "https://dummyimage.com/96x96/fff.jpg&text=4",
    },
    {
        id: 5,
        title: "Dummy Slide 5",
        image: "https://dummyimage.com/1600x600/000/fff.jpg&text=Slide+5",
        thumb: "https://dummyimage.com/96x96/fff.jpg&text=5",
    },
];


const BlogCarousel = () => {
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
                    arrows={false}
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
                                <h2 className="text-white text-3xl md:text-5xl font-bold px-6 text-center drop-shadow-lg">
                                    {slide.title}
                                </h2>
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
                    arrows={true}
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
