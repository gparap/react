/* Created by gparap (c) 2022 */

import React from 'react';

function ToDoList({ todoList }) {

  {/* map each to-do to a list item */}
  let todoListItems = todoList.map((item, index) => {
    return <li key={index}>{item}</li>
  });

  return(
    <div>
      <ul>
        {todoListItems}
      </ul>
    </div>
  );
}

export default ToDoList;
