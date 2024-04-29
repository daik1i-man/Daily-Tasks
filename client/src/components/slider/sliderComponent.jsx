import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function SliderComponent() {
    const newMonth = new Date().getMonth();
    let Months = [];
    Array.from({ length: 12 }, (v, i) => {
        Months[i] = new Date(null, i + 1, null).toLocaleDateString('eng', { month: 'long' });
    })

    Months = [...Months.slice(newMonth), ...Months.slice(0, newMonth)];

    const SampleNextArrow = ({ onClick }) => (
        <div className="w-8 h-8 bg-black text-white text-center right-2 top-3 p-1 rounded-full cursor-pointer absolute"
            onClick={onClick}
        >
            <ChevronRight
                className=''
            />
        </div>
    )

    const SamplePrevArrow = ({ onClick }) => (
        <div className="w-8 h-8 bg-white text-black left-2 top-3 z-10 text-center p-1 rounded-full cursor-pointer absolute"
            onClick={onClick}
        >
            <ChevronLeft
                className=''
            />
        </div>
    )

    const Slide = ({ month }) => {
        return (
            <div className={`${(month === new Date().toLocaleString('eng', { month: 'long' })) ? 'bg-black text-white' : ''} w-full h-14 items-center border border-solid text-center`}>
                <Link to={``}>
                    <div className="py-4">
                        {month}
                    </div>
                </Link>
            </div>);
    }

    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveWidth: 2,
    };

    return (
        <>
            <div className="relative">
                <Slider {...settings}
                    className='w-full h-14 mx-auto'
                >
                    {Months.map((month, index) => (
                        <Slide
                            key={index}
                            month={month}
                        />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default SliderComponent;
