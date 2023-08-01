import React from "react";
import {getCalendar} from "../Api/OrganizerCalendar";

const getCalendarData = () => {
    
    getCalendar().then((response) => {
        console.log(response);
    });
};

function Calendar() {
    return (
        <div>
        <h1>Calendar</h1>
        <button type="button" onClick={getCalendarData}>try get data</button>
        </div>
    );
}

export default Calendar;