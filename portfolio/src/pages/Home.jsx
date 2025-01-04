import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
    <h1 className='display-5 fw-bold text-center'>Home Page</h1>
    <Container>
      <Row className='sec_sp'>
      <Col>
      <strong>Email: ca.geor97@gmail.com</strong>
      </Col>
      </Row>
    </Container>
    </>
  );
};

export default Home;
