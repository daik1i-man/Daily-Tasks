import React from "react";
import SliderComponent from "../../components/slider/sliderComponent";
import TaskListsComponent from "../../components/TaskListsComponent/TaskListsComponent";

function MonthlyEventPage() {
    return (
        <div className="">
            <div className="slider-container mb-4 shadow-sm px-4 py-2 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
                <SliderComponent />
            </div>
            <TaskListsComponent />
        </div>
    );
}

export default MonthlyEventPage;
