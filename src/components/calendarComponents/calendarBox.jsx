import React from "react";

import "../../styles/CalendarBoxStyle.css";

function generateDummyData() {
    return {
        "data": [
            {
                "date": "2023-07-31",
                "dayOfWeek": "Monday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-01",
                "dayOfWeek": "Tuesday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-02",
                "dayOfWeek": "Wednesday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-03",
                "dayOfWeek": "Thursday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-04",
                "dayOfWeek": "Friday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-05",
                "dayOfWeek": "Saturday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-06",
                "dayOfWeek": "Sunday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-07",
                "dayOfWeek": "Monday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-08",
                "dayOfWeek": "Tuesday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-09",
                "dayOfWeek": "Wednesday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-10",
                "dayOfWeek": "Thursday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-11",
                "dayOfWeek": "Friday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-12",
                "dayOfWeek": "Saturday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-13",
                "dayOfWeek": "Sunday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-14",
                "dayOfWeek": "Monday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-15",
                "dayOfWeek": "Tuesday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-16",
                "dayOfWeek": "Wednesday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-17",
                "dayOfWeek": "Thursday",
                "tasks": [],
                "events": []
            },
            {
                "date": "2023-08-18",
                "dayOfWeek": "Friday",
                "tasks": [],
                "events": []
            }
        ]
    };
}

function CalendarBox() {
    return (
        <div className="calendarBox">
            <div className="weekdays-box">
                <h3>Monday</h3>
                <h3>Tuesday</h3>
                <h3>Wednesday</h3>
                <h3>Thursday</h3>
                <h3>Friday</h3>
                <h3>Saturday</h3>
                <h3>Sunday</h3>
            </div>
            <div className="calendarBox_days">
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
                <p className="dateNumber">24</p>
            </div>
        </div>
    );
}

export default CalendarBox;
