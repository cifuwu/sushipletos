import Filaproductos from '@/components/Filaproductos';

import { useState } from "react";
import { useEffect } from "react";
import { Container, Row , Col} from 'react-bootstrap';
import Head from 'next/head';


function Busqueda({productos, busqueda}) {


  return (
    <>
    <Head>
        <title>Búsqueda | CifuMakers</title>
        <meta name="description" content="Busqueda - CifuMakers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Container >
      <Row className='justify-content-center' style={{marginTop: '35px', marginBotton: '25px'}}>
        <Col xs={12} className=''>
          {/* <img src={imagen} alt="" className='rounded img-fluid' /> */}
          <h4>Búsqueda: {busqueda}</h4>
        </Col>
      </Row>

      {/* <Row className='' style={{marginTop: '30px', marginBotton: ''}}>
        <h3 className='fs-2 fw-normal'> {categoria} </h3>
      </Row> */}
        {productos.length!=0?
        <Filaproductos productos={productos}/>    
        :   <Row className='gy-3 mx-auto text-center'  style={{marginTop: '15px'}}>
                <h3>No se encontraron productos :c</h3>
            </Row> 
        }

      <div style={{marginTop: '100px'}}></div>
      <div style={{marginTop: '100px'}}></div>
    </Container>
    </>

  )
}

export default Busqueda;


export async function getServerSideProps({query}){
    const id = query.id;
    const productos = []

    //console.log(productos)

    return {
      props: {
        productos,
        busqueda: id
      }
    };
  }
  