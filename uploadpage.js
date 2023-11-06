import React, { useState } from "react";
import {
  Container,
  Card,
  Col,
  Row,
  Button,
  Form,
  Table,
} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const UploadPage = () => {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [show, setShow] = useState(false);
  const [enable, setEnable] = useState(true);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    console.log("abcd", e.target.files[0])
    if(e.target.files[0]){
    setFile(e.target.files[0]);
    setEnable(false)
    }
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
    setShow(true);
//     axios.post(`https://jsonplaceholder.typicode.com/users`, { fileReader })
//  .then(res => {
//  console.log(res);
//  console.log(res.data);
//  })
  };

  const handleClose = () => setShow(false);

  const headerKeys = Object.keys(Object.assign({}, ...array));

  // const abcd = (e) => {
  // console.log ("value", e.target.value)
  // }

  return (
    <div>
      <Container fluid>
        <Row className="row mt">
          <Col className="col-4">
            <Card className="text-center">
              <Card.Header>upload cvs file</Card.Header>
              <Card.Body>
                <Form.Group
                  controlId="formFileMultiple"
                  className="mb-3"
                  onChange={handleOnChange}
                >
                  <Form.Control
                    type="file"
                    multiple
                    id={"csvFileInput"}
                    accept={".csv"}
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={handleOnSubmit} disabled={enable}>
                    upload
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Patient File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped responsive>
          <thead>
            <tr key={"header"}>
              {headerKeys.map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {array.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default UploadPage;