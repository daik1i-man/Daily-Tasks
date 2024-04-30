import React from 'react'
import TaskListsComponent from '../../components/TaskListsComponent/TaskListsComponent';
import WeeklySliderComponent from '../../components/weeklySliderComponent/weeklySliderComponent';

function WeeklyEventPage() {
    return (
        <>
            <div className="slider-container mb-4 shadow-sm px-4 py-2 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
                <WeeklySliderComponent />
            </div>
            <TaskListsComponent />
        </>
    )
}

export default WeeklyEventPage;
