import React from "react";

function TodoLists(props) {
    const { TodoLists } = props;
  
    return (
      <ul>
        {TodoLists.map((list) => (
          <li key={list.listName}>
            <strong>{list.listName}</strong>
            <ul>
              {list.tasks.map((task) => (
                <li key={task.taskName}>
                  {task.taskName}
                  {task.isCompleted ? " (Completed)" : ""}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
}

export default TodoLists;