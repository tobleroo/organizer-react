import React from "react";
import {getCalendar} from "../Api/OrganizerCalendar";
import CalendarBox from "../components/calendarComponents/calendarBox";
import SelectedDay from "../components/calendarComponents/SelectedDay";

//import css file
import "../styles/Calendar.css";

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
        <div className="calendar-page">
            <h1>Calendar</h1>
            <div className="error-box">

            </div>

            <div className="all-calendar">
                <div className="selected-date-calendar">
                    <SelectedDay/>
                </div>

                <div className="calendar">
                    <CalendarBox/>
                </div>
            </div>
            {/* <button type="button" onClick={getCalendarData}>try get data</button> */}
        </div>
    );
}

export default Calendar;