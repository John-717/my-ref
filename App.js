import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormTodo from "./FormTodo";
import Todo from "./Todo";
import { Card ,Row,Col} from "react-bootstrap";

function App() {
   // eslint-disable-next-line
  const [todos, setTodos] = useState([
    {
      text: "please add your lists",
      isDone: false,
    },
  ]);
  
  const addTodo =(text)=>{
    const newTodos = [...todos,{text,isDone:false}]
    setTodos(newTodos)
  }

  const markTodo =(index)=>{
    const newTodos = [...todos]
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos)
  }

  const deleteTodo =(index)=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo}/>
        <br/>
        <div>
          {todos.map((todo,index) => {
            return (
              <Row mt-4>
              <Col className="col-md-6 offset-md-3">
            <Card className="mx-auto my-2">
            <Card.Body>
            <Todo todo={todo} index={index}
            markTodo={markTodo}
            deleteTodo={deleteTodo}
            />
            </Card.Body>
          </Card>
          </Col>
          </Row>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
