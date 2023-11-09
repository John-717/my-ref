import React,{useState} from "react";
import {Form ,Button,FloatingLabel,Row,Col} from 'react-bootstrap'
import { BsCartCheckFill } from "react-icons/bs";

const FormTodo = ({addTodo}) => {

  const[value,setValue] = useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(!value) return
    addTodo(value)
    setValue('')
  }
  return (
    <Form onSubmit={handleSubmit}>
        <Row className="g-2">
      <Col className="col-md-6 offset-md-3" md>
        <FloatingLabel controlId="floatingInputGrid" label="what you want to add ?">
          <Form.Control type="text" placeholder="what you want to add ?" 
          value={value}
          onChange={e=> setValue(e.target.value)}
          />
        </FloatingLabel>
      </Col>
      <Button type="submit" className="gap-1 col-1"variant="primary"><BsCartCheckFill/></Button>
    </Row>
    </Form>
  );
};

export default FormTodo;
