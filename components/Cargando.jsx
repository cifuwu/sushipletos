import React from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

function Cargando() {
  return (
    <Container>
        <Row className='justify-content-center align-items-center'>
            <Col xs='auto' style={{marginTop: 100}}>
                <Spinner animation='grow' role="status" variant="secondary" style={{width: '3rem', height: '3rem'}}>
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>
            <Col xs='auto' style={{marginRight: 0}}>
                <h4>Cargando...</h4>
            </Col>
        </Row>
    
    </Container>
  )
}

export default Cargando