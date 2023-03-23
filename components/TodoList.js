import React from 'react';
const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

<div class="open_grepper_editor" title="Edit & Save To Grepper"></div>;
