import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SobreEnviosPage() {
  return (
    <>
    <Head>
      <title>Sobre Envíos</title>
      <meta name="description" content='¿dudas sobre nuestras políticas de envíos? ¡averigualo acá!' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Container style={{marginTop: '25px'}}>
      <Row style={{marginBottom: '15px'}}>
        <Col className='text-center'>
          <h2 className='fw-normal'> Sobre los envíos 🚚</h2>
        </Col>
      </Row>
      <Row style={{marginBottom: '0px'}}>
        <Col className='text-center'>
          <p className="fw-normal">info importante sobre los envíos</p>
        </Col>
      </Row>




    </Container>
    </>
  )
}

export default SobreEnviosPage