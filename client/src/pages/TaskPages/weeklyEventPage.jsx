import React from 'react'
import WeeklySliderComponent from '../../components/weeklySliderComponent/weeklySliderComponent';
import { ListDropComponent } from '../../components/listDropComponent/listDropComponent';

function WeeklyEventPage() {
    return (
        <>
            <div className="slider-container mb-4 shadow-sm px-4 py-2 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
                <WeeklySliderComponent />
                <ListDropComponent />
            </div>
        </>
    )
}

export default WeeklyEventPage;
