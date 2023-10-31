// ProductList.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ProductList = ({ products }) => {
  // console.log("products", products)
  return (
    <Container>
      {/* <Row>
        {products?.product.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
    </Container>
  );
};

export default ProductList;
