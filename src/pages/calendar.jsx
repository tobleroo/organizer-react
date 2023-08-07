import React from "react";
import {getCalendar} from "../Api/OrganizerCalendar";
import CalendarBox from "../components/calendarComponents/calendarBox";

const getCalendarData = async () => {
    try {
        const response = await getCalendar();
        console.log(response);

    } catch (error) {
        if (error.response) {
            //get element with class error-box
            let errorBox = document.querySelector(".error-box");
            errorBox.innerHTML = "code: " + error.response.status + ". something went wrong";
        } else {
            let errorBox = document.querySelector(".error-box");
            // The request was not made and no response was received
            errorBox.innerHTML = error.message;
        }
    }
};

function Calendar() {
    return (
        <div>
        <h1>Calendar</h1>
        <div className="error-box">

        </div>

        <div className="calendar">
            <CalendarBox/>
        </div>
        {/* <button type="button" onClick={getCalendarData}>try get data</button> */}
        </div>
    );
}

export default Calendar;