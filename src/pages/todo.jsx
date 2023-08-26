import React from "react";
import { useState, useEffect } from "react";
import {getTodo} from "../Api/OrganizerTodo.js";
import TaskCategories from "../components/todoComponents/showTasks.jsx";
import TodoLists from "../components/todoComponents/showTodoLists.jsx";

const Todo = () => {

    const [todoLists, setTodoLists] = useState(null);

    useEffect(() => {
        async function getTodoData() {
            const calendarApiResponse = await getTodo();
            setTodoLists(calendarApiResponse.data);
        }
        getTodoData();
        console.log(todoLists);
    }, []);

    return (
    <div className="todo-page">
        
        <div className="tasks-and-add-box">
            {/* component for displaying the task data */}
            {/* <TaskCategories taskCategories={todoLists} /> */}
            {/* component for adding new data */}
            {/* <TodoLists TodoLists={todoLists} /> */}
        </div>
    </div>);
};

export default Todo;