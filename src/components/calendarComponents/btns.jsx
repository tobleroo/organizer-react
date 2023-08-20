import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineCheckSquare, AiOutlineMinusSquare } from "react-icons/ai";




export function RemoveTaskBtn({ taskTitle, taskTime, isCompleted, onRemoveClick, onCompleteClick }) {

    const [isCompletedState, setIsCompletedState] = useState(isCompleted);

    function getIcon() {
        if (isCompletedState) {
            return <AiOutlineCheckSquare size={25} />;
        } else {
            return <AiOutlineMinusSquare size={25} />;
        }
    };

    function changeStateOfTask() {
        
        onCompleteClick();
        
        setIsCompletedState(prevState => !prevState);
    };

    return (
      <div className="task">
        <button className="remove-task" onClick={onRemoveClick}>
            <AiOutlineClose size={20}/>
        </button>
        <p className="task-title">{taskTitle}</p>
        <p className="task-time">{taskTime}</p>
        <p className="complete-task" id='taskCompletedId' onClick={changeStateOfTask}>
            {getIcon()}
        </p>
      </div>
    );
};