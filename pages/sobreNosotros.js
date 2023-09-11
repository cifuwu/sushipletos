import Head from 'next/head'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SobreNosotrosPage() {
  const datoEstructurado = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CifuMakers",
    "url": "https://www.cifumakers.cl/",
    "logo" : "https://cifu.blob.core.windows.net/cifumakers/logo/logo.png"
  };
  return (
    <>
    <Head>
      <title>Sobre Nosotros </title>
      <meta name="description" content='¿quiénes somos nosotros? ¡averigualo acá!' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datoEstructurado) }} />
    </Head>
    <Container style={{marginTop: '25px'}}>
      <Row style={{marginBottom: '15px'}}>
        <Col className='text-center'>
          <h3 className="fw-normal">¿Quiénes somos? 👀</h3>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <p className="fw-normal">En realidad principalmente soy sólo uno 🙇‍♂️. Estudiante de ing civil informática, aunque soy un completo amante del diseño. Por lo que me esfuerzo a mil por entregar un producto bueno y, sobre todo, bonito, para que todos puedan disfrutar!! 🤗</p>
        </Col>
      </Row>
    
    </Container>
    </>
  )
}

export default SobreNosotrosPage