import React from 'react'
import './Todo.css'
import { Button } from 'react-bootstrap'
import {  } from "react-icons/fa";

const Todo = ({todo,index,markTodo,deleteTodo}) => {
  const {text,isDone} = todo;

  

  return (
    <><div className='todo'>
          <span style={{textDecoration:isDone ? 'line-through' : ''}}>{text}</span>
          <div className='todo-btn'>
      <Button onClick={()=>{markTodo(index)}}> {isDone ? 'Not Done' : 'Done'}</Button>
      <Button onClick={()=>{deleteTodo(index)}} variant="danger">Delete</Button>
      </div>
          </div></>
  )
}

export default Todo


