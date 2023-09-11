import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Carrusel from "../components/home/Carrusel";
import FilaCategorias from '@/components/home/FilaCategorias';
import FilaProductosHome from '@/components/home/FilaProductosHome';


import { carrousel, productos } from '@/helpers/data';



export default function Home() {


  return (
    <>
      <Head>
        <title>CifuMakers</title>
        <meta name="description" content="Tiendita de productos hechos en impresora 3D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <div className="">
        <Carrusel imagenes={carrousel}/>
       
        <Container style={{marginTop: '50px'}}> 

        <Row style={{marginTop: '75px'}}>
          <Col>
            <h1 className="fw-normal"> Productos destacados </h1>
            <p> Mira los productos que más te recomendamos </p>
          </Col>
        </Row>

        <FilaProductosHome productos={productos}/>

     
        {/* <Row style={{marginBottom: '25px', marginTop: '50px', padding: '15px'}} className='align-items-center justify-content-evenly bg-body-tertiary'>
          <Col xs={4} sm={4} md={3} lg={3} xl={3} xxl={2}>
            <Row>
              <img className="img-fluid" src={calendario}/>
            </Row>
            <Row className="text-center" style={{marginTop: '10px'}}>
              <h6 className="fw-normal d-md-none">Pedidos listos en uno a tres días hábiles.</h6>
              <h5 className="fw-normal d-none d-md-block">Pedidos listos en uno a tres días hábiles.</h5>
            </Row>
          </Col>
          <Col xs={4} sm={4} md={3} lg={3} xl={3} xxl={2}>
            <Row>
              <img className="img-fluid" src={envios}/>
            </Row>
            <Row className="text-center" style={{marginTop: '10px'}}>
              <h6 className="fw-normal d-md-none">Envios a todo Chile por Starken.</h6>
              <h5 className="fw-normal d-none d-md-block">Envios a todo Chile por Starken.</h5>
            </Row>
          </Col>
          <Col xs={4} sm={4} md={3} lg={3} xl={3} xxl={2}>
            <Row>
              <img className="img-fluid" src={chat}/>
            </Row>
            <Row className="text-center" style={{marginTop: '10px'}}>
              <h6 className="fw-normal d-md-none">Háblanos a nuestras redes.</h6>
              <h5 className="fw-normal d-none d-md-block">Háblanos a nuestras redes.</h5>
            </Row>
          </Col>
        </Row> */}


      </Container>
    </div>
    </>
  )
}

