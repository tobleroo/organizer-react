import React from "react";

import "../../styles/SelectedDay.css";

function SelectedDay() {





return (
    <div className="selected-date-box">
        <div className="date-info-box">
            <h4>selected date</h4>
        </div>
        <div className="task-box">
            <h4>tasks:</h4>
        </div>
        <div className="event-box">
            <h4>events:</h4>
        </div>
        <div className="add-box">
            <button>+</button>
        </div>

    </div>
);

}
export default SelectedDay;