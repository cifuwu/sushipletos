import Head from 'next/head'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function PoliticasDevolucion() {
  return (
    <>
    <Head>
      <title>Políticas de Reembolsos | CifuMakers</title>
      <meta name="description" content='¿quiénes saber nuestras políticas sobre reembolsos? ¡averigualo acá!' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Container style={{marginTop: '25px'}}>
      <Row style={{marginBottom: '15px'}}>
        <Col className='text-center'>
          <h3 className="fw-normal">Política de devoluciones y reembolsos:</h3>
        </Col>
      </Row>

 <p>    
  acá irán las políticas de devolución y esas cosas.
</p> 



    </Container>
    </>
  )
}

export default PoliticasDevolucion