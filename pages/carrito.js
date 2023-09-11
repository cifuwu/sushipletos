import React, {useContext, useEffect, useState} from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import { CartContext } from '@/contexts/cart/CartContext';
import ProductoCart from '@/components/ProductoCart';

import { useRouter } from 'next/router';
import Head from 'next/head';
import Cookies from 'js-cookie';


function CartPage({carritoInitial}) {
  const router = useRouter();
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState({});
  const [cargando, setCargando] = useState(false);


  useEffect(()=>{
    setCarrito(cart);
    setTotal(cart.total);
  },[cart])

  
  return (
    <>
    <Head>
        <title>Carrito</title>
        <meta name="description" content="Carrito - cifumakers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <Container style={{marginTop: '40px'}}>
      
          <Row className='justify-content-center'>
            <Col xs={10} sm={10} md={5} lg={5} xl={4} xxl={3}>
              <Row>
                <Col xs='auto'>
                  <h2> Carrito de compras </h2>
                </Col>
              </Row>
            </Col>
            
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>

            </Col>

            <Col xs={12} sm={12} md={12} lg={11} xl={10} xxl={10}>
              <hr />
            </Col>
            
          </Row>

        <Row className='justify-content-center'>



          <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={8}>
            <Row>
              <Col>
              { carrito.elecciones?.map( (elemento) => {
                return(
                  <ProductoCart producto={elemento} key={elemento.id} cargando={cargando} setCargando={setCargando}/>
                )
              })}
              </Col>
            </Row>
          
          </Col> 

          <Col xs={8} sm={8} md={4} lg={3} xl={3} xxl={3} className=''>
            <ul className="list-group">
              <li className="list-group-item">
                  <div className="row justify-content-center">
                      <div className="col-auto">
                          <h1 className="fs-3 fw-normal">Total:</h1>
                      </div>
                      <div className="col-auto">
                          {cargando? <Spinner style={{marginTop: 3}}/> 
                          : 
                          <h1 className="fs-3 fw-normal text-success">${total?.toLocaleString("es-CL")}</h1>
                          }
                          
                      </div>
                      <div className="col-12">
                          <hr />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col text-center">
                        <Button className="btn btn-success" type="button" onClick={(e)=>{e.preventDefault; router.push('/checkout/step-1');}}>Ir a pagar</Button>
                      </div>
                  </div>
              </li>
            </ul>

          </Col>

        </Row>
        <div style={{marginTop: '100px'}}>

        </div>
    </Container>
    </>
  )
}

export default CartPage

