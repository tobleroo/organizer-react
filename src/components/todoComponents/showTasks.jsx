import React from "react";

function TaskCategories(props) {
    const { taskCategories } = props;
  
    return (
      <ul>
        {taskCategories.map((category) => (
          <li key={category.categoryName}>
            <strong>{category.categoryName}</strong>
            <ul>
              {category.Tasks.map((task) => (
                <li key={task.taskName}>
                  {task.taskName}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }

export default TaskCategories;