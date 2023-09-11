import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';

function ComentarioProducto({tipo, idTipo, setComentarios, comentarios}) {

  return (
    <Row>
      <Col>
          <p
            className="fs-5 fw-medium text-dark"
            style={{ marginBottom: "5px" }}
          >
          {tipo}
          </p>
        <Form.Control required maxLength='30' value={comentarios[idTipo]} onChange={e=>{e.preventDefault(); setComentarios({...comentarios, [idTipo]: e.target.value})}} type="text" placeholder={"Ingrese "+ tipo} />
        <br />
      </Col>
    </Row>
  )
}

export default ComentarioProducto