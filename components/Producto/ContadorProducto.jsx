import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

function ContadorProducto({cont, setCont}) {
  return (
    <Col
      xs={"auto"}
      sm={"auto"}
      md={"auto"}
      lg={"auto"}
      xl={"auto"}
      xxl={"auto"}
      style={{
        marginBottom: "15px",
        marginRight: "25px",
        marginLeft: "10px",
      }}
    >

      <Row className="justify-content-start align-items-start">
        <Col xs="auto">
          <Button
            onClick={() => {
              cont == 1 ? null : setCont(cont - 1);
            }}
          >
            -
          </Button>
        </Col>
        <Col xs="auto">
          <h4 style={{ marginTop: "3px" }}>{cont}</h4>
        </Col>
        <Col xs="auto">
          <Button
            onClick={() => {
              setCont(cont + 1);
            }}
          >
            +
          </Button>
        </Col>
      </Row> 


    </Col>
  )
}

export default ContadorProducto