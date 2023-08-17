import React from "react";
import { useState, useEffect } from "react";

import "../../styles/SelectedDay.css";

function SelectedDay({selectedDate}) {

    const [tasks, setTasks] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        printTasks();
        printEvents();
        printSelectedDayDate();
        if(selectedDate){
            setTasks(selectedDate.tasks);
            setEvents(selectedDate.events);
        }
    }, [selectedDate, tasks, events]);

    //useeffect to rerender when tasks or events change
    useEffect(() => {
    }, [tasks, events]);



    function switchTaskEventInput(inputWanted){

        if(inputWanted === "event"){
            document.querySelector(".add-event").style.display = "block";
            document.querySelector(".add-task").style.display = "none";
            document.querySelector("#eventBtn").style.backgroundColor = "rgb(241, 96, 12)";
            document.querySelector("#taskBtn").style.backgroundColor = "black";
        } else if(inputWanted === "task"){
            document.querySelector(".add-event").style.display = "none";
            document.querySelector(".add-task").style.display = "block";
            document.querySelector("#eventBtn").style.backgroundColor = "black";
            document.querySelector("#taskBtn").style.backgroundColor = "rgb(241, 96, 12)";
        }
    }

    function addTaskToCalendar(){
        //create new task object
        let task = {
            id: Math.floor(Math.random() * 1000000),
            title: document.querySelector("#addTaskTitleId").value,
            timeToDoMinutes: document.querySelector("#addTimeId").value,
            isComplete: false
        };

        //add task to selectedDate.tasks array
        selectedDate.tasks.push(task);
        setTasks([...tasks, task]);
        //console.log("use state tasks -> " +tasks);
    }


    function addEventToCalendar(){
        //create new event object
        let event = {
            id: Math.floor(Math.random() * 1000000),
            title: document.querySelector("#addEventTitleId").value,
            description: "none",
            eventTime: document.querySelector("#addClockId").value.toString(),
        };

        //add event to selectedDate.events array
        selectedDate.events.push(event);
        setEvents([...events, event]);
    }

    function printTasks(){

        if(selectedDate == null || selectedDate.tasks.length === 0){
            //query for actiove-tasks div
            let activeTasks = document.querySelector(".active-tasks");
            activeTasks.innerHTML = "no tasks";
        } else {
            //query for actiove-tasks div
            let activeTasks = document.querySelector(".active-tasks");
            activeTasks.innerHTML = "";
            //loop trough selectedDate.tasks array
            for(let i = 0; i < selectedDate.tasks.length; i++){
                //create button to remove task
                const removeTask = document.createElement("button");
                removeTask.className = "remove-task";
                removeTask.innerHTML = "remove task";
                //create function to remove task from list
                
                const task = document.createElement("div");
                task.className = "task";
                const taskTitle = document.createElement("p");
                taskTitle.className = "task-title";
                taskTitle.innerHTML = selectedDate.tasks[i].title;
                const taskTime = document.createElement("p");
                taskTime.className = "task-time";
                taskTime.innerHTML = selectedDate.tasks[i].timeToDoMinutes;
                const completeTask = document.createElement("p");
                completeTask.className = "complete-task";
                completeTask.innerHTML = selectedDate.tasks[i].isCompleted ? "task completed" : "complete task";
                removeTask.addEventListener("click", function(){
                    //loop through selected date tasks array
                    for(let j = 0; j < selectedDate.tasks.length; j++){
                        //remove task with the specific name
                        if(selectedDate.tasks[j].title === selectedDate.tasks[i].title){
                            selectedDate.tasks.splice(j, 1);
                            setTasks([...tasks]);
                        }
                    }
                });

                completeTask.addEventListener("click", function(){
                    //get specific task and set isComplete to true
                    for(let j = 0; j < selectedDate.tasks.length; j++){
                        if(selectedDate.tasks[j].title === selectedDate.tasks[i].title){
                            if(selectedDate.tasks[j].isCompleted === true){
                                selectedDate.tasks[j].isCompleted = false;
                                //change color of task div to white
                                task.style.backgroundColor = "red";
                                completeTask.innerHTML = "complete task";
                            } else{
                                selectedDate.tasks[j].isCompleted = true;
                                completeTask.innerHTML = "task completed";
                                //change color of task div to green
                                
                            }
                            setTasks([...tasks]);
                        }
                    }
                });
                task.appendChild(removeTask);
                task.appendChild(taskTitle);
                task.appendChild(taskTime);
                task.appendChild(completeTask);
                activeTasks.appendChild(task);

            }
        }
    }

    function printEvents(){
        if(selectedDate == null || selectedDate.events.length === 0){
            let activeTasks = document.querySelector(".active-events");
            activeTasks.innerHTML = "no tasks";
        }else {
            let activeTasks = document.querySelector(".active-events");
            activeTasks.innerHTML = "";
            for(let i = 0; i < selectedDate.events.length; i++){

                //add button to remove event
                const removeEvent = document.createElement("button");
                removeEvent.className = "remove-event";
                removeEvent.innerHTML = "remove event";
                //create function to remove event from list
                removeEvent.addEventListener("click", function(){
                    //loop through selected date events array
                    for(let j = 0; j < selectedDate.events.length; j++){
                        //remove event with the specific name
                        if(selectedDate.events[j].title === selectedDate.events[i].title){
                            selectedDate.events.splice(j, 1);
                            setEvents([...events]);
                        }
                    }
                });


                const oneEvent = document.createElement("div");
                oneEvent.className = "one-event";
                const eventTitle = document.createElement("p");
                eventTitle.className = "event-title";
                eventTitle.innerHTML = selectedDate.events[i].title;
                //not yet implemented time-stamp to backend
                // const eventTime = document.createElement("p");
                // eventTime.className = "event-time";
                // eventTime.innerHTML = selectedDate.events[i].time;
                oneEvent.appendChild(removeEvent);
                oneEvent.appendChild(eventTitle);
                //oneEvent.appendChild(eventTime);
                activeTasks.appendChild(oneEvent);
            }
        }
    }

    function seeSelectedDate(){
        console.log(JSON.stringify(selectedDate));
    }

    function printSelectedDayDate(){
        const dateH4 = document.querySelector(".dateH4");
        if(selectedDate != null){
            dateH4.innerHTML = selectedDate.date;
        } else {
            dateH4.innerHTML = "no date selected";
        }
    }


    return (
        <div className="selected-date-box">
            <div className="date-info-box">
                <h4 className="dateH4"></h4>
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
                        <input type="text" name="event-title" id="addEventTitleId" />
                        <label htmlFor="addDescriptionId">description:</label>
                        <input type="text" name="event-description" id="addDescriptionId" />
                        <label htmlFor="addTimeId">time:</label>
                        <input type="time" name="event-time" id="addClockId" />
                        <button className="taskOrEventAddBtn" onClick={addEventToCalendar}>add to calendar</button>
                    </div>
                    <div className="add-task">
                        <label htmlFor="addTitleId">title:</label>
                        <input type="text" name="task-title" id="addTaskTitleId" />
                        <label htmlFor="addTimeId">time (minutes):</label>
                        <input type="number" name="task-time" id="addTimeId" />
                        <button className="taskOrEventAddBtn" onClick={addTaskToCalendar}>add to calendar</button>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default SelectedDay;