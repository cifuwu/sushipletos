import Head from 'next/head'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function InformacionPage() {
  return (
    <>
    <Head>
      <title>Información </title>
      <meta name="description" content='¿Tienes dudas sobre CifuMakers? ¡despeja tus dudas acá!' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Container style={{marginTop: '25px'}}>
      <Row style={{marginBottom: '15px'}}>
        <Col className='text-center'>
          <h3 className="fw-normal">¿Quiénes somos? 👀</h3>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <p className="fw-normal">Acá irá info</p>
        </Col>
      </Row>

    </Container>
    </>
  )
}

export default InformacionPage