import React from "react";
import { useState, useEffect } from "react";

import "../../styles/CalendarBoxStyle.css";

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

    function getMonthNumber(monthName){
        switch(monthName){
            case "January":
                return "01";
            case "February":
                return "02";
            case "March":
                return "03";
            case "April":
                return "04";
            case "May":
                return "05";
            case "June":
                return "06";
            case "July":
                return "07";
            case "August":
                return "08";
            case "September":
                return "09";
            case "October":
                return "10";
            case "November":
                return "11";
            case "December":
                return "12";
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
            const dateNumbers = document.querySelectorAll('.dateNumber');

            for (const dateNumber of dateNumbers) {
            dateNumber.addEventListener('click', (event) => {
                const dateNumberText = event.target.innerText;
                const fullDate = currentYearSelected+"-"+getMonthNumber(currentMonthName)+"-"+dateNumberText;
                changeSelectedDate(fullDate);
            });
            }

        }
    }

    function changeSelectedDate(dateWanted){
        //run through the calendar data and find the date wanted
        for(let i = 0; i < calendarData.length; i++){
            if(calendarData[i].date === dateWanted){
                selectedDateToCard(calendarData[i]);
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
