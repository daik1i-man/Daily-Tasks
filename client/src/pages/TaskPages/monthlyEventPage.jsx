import React from "react";
import MonthlySliderComponent from "../../components/monthlySliderComponent/monthlySliderComponent";
import { ListDropComponent } from '../../components/listDropComponent/listDropComponent';

function MonthlyEventPage() {
    return (
        <div className="">
            <div className="slider-container mb-4 shadow-sm px-4 py-2 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
                <MonthlySliderComponent />
                <ListDropComponent />
            </div>
        </div>
    );
}

export default MonthlyEventPage;
