import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const getWeekDay = () => {
    const weekDay = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        weekDay.push(new Date(today.getFullYear(), today.getMonth(), today.getDate() + i).toLocaleDateString('eng', { weekday: 'long' }))
    }

    return weekDay;
}

function WeeklySliderComponent() {
    const [current, setCurrent] = React.useState(null);
    const [week, setWeek] = React.useState([]);

    React.useEffect(() => {
        const today = new Date();
        const Current = today.toLocaleDateString('eng', { weekday: 'long' });
        setCurrent(Current);
        const weekInMonth = getWeekDay();
        setWeek(weekInMonth);
    }, [])

    const SampleNextArrow = ({ onClick }) => (
        <div className="w-6 h-6 bg-black text-white text-center right-2 top-2 p-1 rounded-full cursor-pointer absolute"
            onClick={onClick}
        >
            <ChevronRight
                className='w-4 h-4'
            />
        </div>
    )
    const SamplePrevArrow = ({ onClick }) => (
        <div className="w-6 h-6 bg-white text-black p-1 left-2 top-2 z-10 text-center rounded-full cursor-pointer absolute"
            onClick={onClick}
        >
            <ChevronLeft
                className='w-4 h-4'
            />
        </div>
    )

    const Slide = ({ week }) => {
        const isCurrent = week === current;
        return (
            <div className={`${isCurrent ? 'bg-black text-white' : ''} w-full py-2 items-center border border-solid text-center`}>
                {/* There x */}
                <Link to=''>
                    <div className="text-[14px]">
                        {week}
                    </div>
                </Link>
            </div>
        )
    }

    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveWidth: 2,
    }

    return (
        <>
            <div className="relative">
                <Slider {...settings}>
                    {week.map((w, i) => (
                        <Slide key={i} week={w} />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default WeeklySliderComponent
