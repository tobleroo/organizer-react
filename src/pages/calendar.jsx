import React from "react";
import { useState, useEffect } from "react";
import {getCalendar, saveCalendarToBackend} from "../Api/OrganizerCalendar";
import CalendarBox from "../components/calendarComponents/calendarBox";
import SelectedDay from "../components/calendarComponents/SelectedDay";

//import css file
import "../styles/Calendar.css";




function Calendar() {

    const [calendarData, setCalendarData] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect( () => {
        async function fetchData() {
            const calendarApiResponse = await getCalendarData();
            setCalendarData(calendarApiResponse.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        
    }, [calendarData,selectedDate]);

    const getCalendarData = async () => {
        try {
            const response = await getCalendar();
            
            return response;
    
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

    async function saveCalendar(){
        //save calendar to backend
        const response = await saveCalendarToBackend(calendarData);
        if(response.status === 200){
            console.log("calendar saved");
        }else{
            console.log("something went wrong");
        }

        //console.log(calendarData);
    }
    
    return (
        <div className="calendar-page">
            <h1>Calendar</h1>
            <div className="error-box">

            </div>

            <div className="all-calendar">
                <div className="selected-date-calendar">
                    <SelectedDay selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                </div>

                <div className="calendar">
                    <CalendarBox calendarData={calendarData}
                    setSelectedDate={setSelectedDate}/>
                </div>
            </div>
            <div className="save-calendar-box">
                <button className="save-calendar" onClick={saveCalendar}>save calendar</button>
            </div>
        </div>
    );
}

export default Calendar;