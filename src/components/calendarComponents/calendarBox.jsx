import React from "react";
import { useState, useEffect } from "react";

import "../../styles/CalendarBoxStyle.css";

// function generateDummyData() {
//     return {
//         "data": [
//             {
//                 "date": "2023-07-31",
//                 "dayOfWeek": "Monday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-01",
//                 "dayOfWeek": "Tuesday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-02",
//                 "dayOfWeek": "Wednesday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-03",
//                 "dayOfWeek": "Thursday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-04",
//                 "dayOfWeek": "Friday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-05",
//                 "dayOfWeek": "Saturday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-06",
//                 "dayOfWeek": "Sunday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-07",
//                 "dayOfWeek": "Monday",
//                 "Tasks": [
//                     {
//                         "_id": 0,
//                         "Title": "clean house",
//                         "IsCompleted": false,
//                         "timeToDoMinutes": 30
//                     },
//                     {
//                         "_id": 0,
//                         "Title": "clean vacuum",
//                         "IsCompleted": false,
//                         "timeToDoMinutes": 20
//                     }
//                 ],
//                 "Events": [
//                     {
//                         "_id": 0,
//                         "Title": "see the show",
//                         "Description": "once upon a time a show"
//                     },
//                     {
//                         "_id": 0,
//                         "Title": "go to the party",
//                         "Description": "once upon a time a show"
//                     }
//                 ]
//             },
//             {
//                 "date": "2023-08-08",
//                 "dayOfWeek": "Tuesday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-09",
//                 "dayOfWeek": "Wednesday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-10",
//                 "dayOfWeek": "Thursday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-11",
//                 "dayOfWeek": "Friday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-12",
//                 "dayOfWeek": "Saturday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-13",
//                 "dayOfWeek": "Sunday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-14",
//                 "dayOfWeek": "Monday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-15",
//                 "dayOfWeek": "Tuesday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-16",
//                 "dayOfWeek": "Wednesday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-17",
//                 "dayOfWeek": "Thursday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-08-18",
//                 "dayOfWeek": "Friday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-09-14",
//                 "dayOfWeek": "Monday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-09-15",
//                 "dayOfWeek": "Tuesday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-09-16",
//                 "dayOfWeek": "Wednesday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-09-17",
//                 "dayOfWeek": "Thursday",
//                 "tasks": [],
//                 "events": []
//             },
//             {
//                 "date": "2023-09-18",
//                 "dayOfWeek": "Friday",
//                 "tasks": [],
//                 "events": []
//             }
//         ]
//     };
// }

function CalendarBox( {calendarData, setSelectedDate}) {


    
    const [currentMonthSelected, setCurrentMonthSelected] = useState("");
    const [currentYearSelected, setCurrentYearSelected] = useState("");
    const [currentMonthName, setCurrentMonthName] = useState(getMonthName(getCurrentMonth()));
    
    useEffect(() => {
        // fetch data from backend
        setCurrentMonthSelected(getCurrentMonth());
        setCurrentYearSelected(getCurrentYear());
        setCurrentMonthName(getMonthName(getCurrentMonth()));
        // this is demo for fetching data from backend

        createCalendar();
        
    }, []);

    useEffect(() => {
        createCalendar();
    }, [currentMonthSelected, calendarData]);

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
    function getCurrentYear(){
        const today = new Date();
        const todayMonthString = today.toISOString().slice(0, 4);
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
    function convertNumberToMonthValue(monthNumber){
        
        if(monthNumber >= 10){
            return monthNumber.toString();
        }else{
            return "0" + monthNumber.toString();
        }
    }       
    function changeMonth(changeValue){

        if(currentMonthSelected === "12"){
            setCurrentMonthSelected("01");
            changeYear(1)
        }else if(currentMonthSelected === "01" && changeValue === -1){
            setCurrentMonthSelected("12");
            changeYear(-1);
        }
        else{
            const monthInt = parseInt(currentMonthSelected);
            const newMonth = monthInt + changeValue;
            setCurrentMonthSelected(convertNumberToMonthValue(newMonth));
            setCurrentMonthName(getMonthName(convertNumberToMonthValue(newMonth)))
        }
    }
    function changeYear(changeValue){
        const yearInt = parseInt(currentYearSelected);
        const newYear = yearInt + changeValue;
        setCurrentYearSelected(newYear.toString);
    }
    function getMonthName(monthNumber){
        switch(monthNumber){
            case "01":
                return "January";
            case "02":
                return "February";
            case "03":
                return "March";
            case "04":
                return "April";
            case "05":
                return "May";
            case "06":
                return "June";
            case "07":
                return "July";
            case "08":
                return "August";
            case "09":
                return "September";
            case "10":
                return "October";
            case "11":
                return "November";
            case "12":
                return "December";
            default:
                return "error";
        }
    }

    function selectedDateToCard(chosenDate){
        setSelectedDate(chosenDate);
    }

    //big algorithm to create calendar
    function createCalendar(){

        if(calendarData === null){
            document.getElementById('calendarBoxId').innerHTML = "loading data";
        }else{
            const calendarbox = document.getElementById('calendarBoxId');
            calendarbox.innerHTML = "";

            const monthName = document.getElementById('monthName');
            monthName.innerHTML = currentMonthName + " " + currentYearSelected;
            
            for(let i = 0; i < calendarData.length; i++){

                if(CheckCurrentMonth(calendarData[i].date, currentMonthSelected)){
                    const date = document.createElement('p');
                    date.className = "dateNumber";
                    date.innerText = calendarData[i].date.substring(8,10);
                    if(compareToTodaysDate(calendarData[i].date)){
                        date.style.backgroundColor = "red";
                        selectedDateToCard(calendarData[i]);
                    }
                    calendarbox.appendChild(date);
                }
            }

        }
    }



    return (
        <div className="calendarBox">
            <div className="month-box">
                <h4 id="monthName"></h4>
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
                <button type="button" className="change-month-button" onClick={() => {changeMonth(-1)}}>Previous Month</button>
                <button type="button" className="change-month-button" onClick={() => {changeMonth(1)}}>Next Month</button>
            </div>
        </div>
    );
}

export default CalendarBox;
