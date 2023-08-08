import React from "react";
import { useState, useEffect } from "react";

import "../../styles/SelectedDay.css";

function SelectedDay({SelectedDate}) {

    useEffect(() => {
        printTasks();
    }, [SelectedDate]);



    function switchTaskEventInput(inputWanted){

        if(inputWanted === "event"){
            document.querySelector(".add-event").style.display = "block";
            document.querySelector(".add-task").style.display = "none";
            document.querySelector("#eventBtn").style.backgroundColor = "red";
            document.querySelector("#taskBtn").style.backgroundColor = "white";
        } else if(inputWanted === "task"){
            document.querySelector(".add-event").style.display = "none";
            document.querySelector(".add-task").style.display = "block";
            document.querySelector("#eventBtn").style.backgroundColor = "white";
            document.querySelector("#taskBtn").style.backgroundColor = "red";
        }
    }

    function addTaskToCalendar(){

    }

    function addEventToCalendar(){

    }

    function saveCalendarToServer(){

    }

    function printTasks(){

        if(SelectedDate == null || SelectedDate.tasks.length === 0){
            //query for actiove-tasks div
            let activeTasks = document.querySelector(".active-tasks");
            activeTasks.innerHTML = "no tasks";
        } else {
            //query for actiove-tasks div
            let activeTasks = document.querySelector(".active-tasks");
            //loop trough selectedDate.tasks array
            for(let i = 0; i < SelectedDate.tasks.length; i++){
                //create task div
                console.log(SelectedDate[i]);
            }
        }
    }


    return (
        <div className="selected-date-box">
            <div className="date-info-box">
                <h4>selected date</h4>
            </div>
            <div className="task-box">
                <div className="details-box">
                    <h4>name</h4>
                    <h4>time</h4>
                    <h4>completed</h4>
                </div>
                <div className="active-tasks">
                    {/* <h4 className="task-title">clean house</h4>
                    <p className="task-time">20 minutes</p>
                    <button>complete task</button> */}
                </div>
            </div>
            <div className="event-box">
                <div className="details-box">
                    <h4>name</h4>
                    <h4>time</h4>
                </div>
                <div className="active-events">
                    <h4 className="event-title">go to show</h4>
                    <h4 className="event-time">19:00</h4>
                </div>
            </div>
            <div className="type-add-box">
                <button type="button" className="type-Btn" id="eventBtn" onClick={() => {
                    switchTaskEventInput("event");
                }}>event</button>
                <button type="button" className="type-Btn" id="taskBtn" onClick={() => {
                    switchTaskEventInput("task");
                }}>task</button>
            </div>
            <div className="add-box">
                <div className="selected-type-box">
                    <div className="add-event">
                        <label htmlFor="addTitleId">title:</label>
                        <input type="text" name="event-title" id="addTitleId" />
                        <label htmlFor="addDescriptionId">description:</label>
                        <input type="text" name="event-description" id="addDescriptionId" />
                        <label htmlFor="addTimeId">time:</label>
                        <input type="time" name="event-time" id="addTimeId" />
                    </div>
                    <div className="add-task">
                        <label htmlFor="addTitleId">title:</label>
                        <input type="text" name="task-title" id="addTitleId" />
                        <label htmlFor="addTimeId">time (minutes):</label>
                        <input type="number" name="task-time" id="addTimeId" />
                    </div>
                </div>
            </div>
            <button>add to calendar</button>

        </div>
    );

}
export default SelectedDay;