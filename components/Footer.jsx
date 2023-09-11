import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import webpay from '@/assets/2.png';
import mercadopago from '@/assets/1.png';
import starken from '@/assets/starken.png';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {

  return (
    <div style={{marginTop: '100px'}} className='bg-body-tertiary'>
      <Container >
        <Row style={{marginBottom: '20px', paddingBottom: '30px', paddingTop: '30px'}}  xs={1} sm={1} md={2} lg={4} xl={4}>
          
          <Col style={{marginBottom: '20px'}}>
            <Row>
              <Col>
                <h1 className='fs-5 fw-normal'>Sobre Nosotros</h1>
                <hr />
              </Col>
            </Row>
            <Row> 
              <Col>
                <h1 className="fs-6 fw-normal">
                  <strong>
                    <span className=''>«caca caca caca caca caca»</span>
                  </strong>
                </h1>
                <p>
                  <span>no sé qué poner acá.</span>
                  <br />
                  <span >stars wars 7 sí fue una buena película.</span>
                  </p>
              </Col>
            </Row>
          </Col>

          <Col style={{marginBottom: '20px'}}>
            <Row>
              <Col>
                <h1 className="fs-5 fw-normal">Contacto</h1>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{marginBottom: '5px'}} ><span >contacto@contacto.cl</span></p>
                <p><span >@sushipletos</span></p>
              </Col>
            </Row>
          </Col>

          <Col style={{marginBottom: '20px'}}>
            <Row>
              <Col>
                <h1 className="fs-5 fw-normal">Información</h1>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Link href={'/sobreEnvios'} style={{textDecoration: 'none'}}>
                  <p className='text-dark'>Sobre los envios</p>
                </Link>
              </Col>
              <Col xs={12}>
                <Link href={'/sobreNosotros'} style={{textDecoration: 'none'}}>
                  <p className='text-dark'>Sobre nosotros</p>
                </Link>
              </Col>
              <Col xs={12}>
                <Link href={'/politicasReembolso'} style={{textDecoration: 'none'}}>
                  <p className='text-dark'>Política de devolución</p>
                </Link>
              </Col>
            </Row>
          </Col>
          
          <Col style={{marginBottom: '20px' , marginTop: '10px'}} className="text-center m-auto">
            <Image className="img-fluid" alt='webpay' src={webpay} style={{marginBottom: '15px'}} width={180} />
            <Image className="img-fluid" alt='starken' src={mercadopago} style={{marginBottom: '15px'}} width={180} />
            <Image className="img-fluid" alt='starken' src={starken}  width={180} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="fs-6 text-center " >Desarrollado con todo el ❤️ del mundo.</p>  
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Footer