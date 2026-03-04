import React, { useState } from 'react'

const TodoList = () => {
    const[todos,setTodos]= useState(['Buy Vegetable','Buy Grocery','Buy Fruits',])
   


  const deleteItem = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList
