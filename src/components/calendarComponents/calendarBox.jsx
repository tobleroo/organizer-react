import React from "react";
import { useState, useEffect } from "react";

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
    
    const [calendarData, setCalendarData] = useState(generateDummyData());
    const [currentMonthSelected, setCurrentMonthSelected] = useState(getCurrentMonth());
    
    useEffect(() => {
        // fetch data from backend
        //setCalendarData(generateDummyData());
        CheckCurrentMonth(calendarData.data[0].date);
    }, []);

    useEffect(() => {
        createCalendar();
    }, [calendarData]);
    
    
    function seeData(){
        console.log(calendarData.data[0].date);
    };

    function compareToTodaysDate(calendarDate){
        const today = new Date();
        const todayString = today.toISOString().slice(0, 10);

        if(calendarDate === todayString){
            return true;
        }else{
            return false;
        }

    }

    function getCurrentMonth(){
        const today = new Date();
        const todayMonthString = today.toISOString().slice(5, 7);
        return todayMonthString;
    }

    function CheckCurrentMonth(dateToCheck, currentMonth){
        const inputMonth = dateToCheck.substring(5,7);
        
        if(inputMonth === currentMonth){
            return true;
        }else{
            return false;
        }
    }


    //big algorithm to create calendar
    function createCalendar(){

        if(calendarData === null){
            document.getElementById('calendarBoxId').innerHTML = "loading data";
        }else{
            const calendarbox = document.getElementById('calendarBoxId');

            for(let i = 0; i < calendarData.data.length; i++){

                if(CheckCurrentMonth(calendarData.data[i].date, getCurrentMonth())){
                    const date = document.createElement('p');
                    date.className = "dateNumber";
                    date.innerText = calendarData.data[i].date.substring(8,10);
                    if(compareToTodaysDate(calendarData.data[i].date)){
                        date.style.backgroundColor = "red";
                    }
                    calendarbox.appendChild(date);
                }
            }
        }
    }

    return (
        <div className="calendarBox">
            <div className="month-box">
                <h4>July</h4>
            </div>
            <div className="weekdays-box">
                <h3>Monday</h3>
                <h3>Tuesday</h3>
                <h3>Wednesday</h3>
                <h3>Thursday</h3>
                <h3>Friday</h3>
                <h3>Saturday</h3>
                <h3>Sunday</h3>
            </div>
            <div className="calendarBox_days" id="calendarBoxId">
                
            </div>
            <div className="change-month-box">
                <button type="button" className="change-month-button" onClick={seeData}>Previous Month</button>
                <button type="button" className="change-month-button">Next Month</button>
            </div>
        </div>
    );
}

export default CalendarBox;
