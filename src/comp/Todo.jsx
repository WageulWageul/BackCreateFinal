import React from 'react';

const Todo = ({ id, title, content}) => {
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      <p>{content}</p>
    </div>
  );
};

export default Todo;