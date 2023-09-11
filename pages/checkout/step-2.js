import Carrito2CheckOut from "@/components/Pagoform/Carrito2CheckOut";
import React, { useEffect, useState, useContext } from "react";
import { Col, Container, Row , ToggleButton} from "react-bootstrap";
import EnvioDomicilio from "@/components/Pagoform/EnvioDomicilio";
import Head from "next/head";
import { useRouter } from "next/router";
import { CartContext } from "@/contexts/cart/CartContext";
import { UserContext } from "@/contexts/user/UserContext";



function CheckoutPage2() {
    const [cart, setCart] = useContext(CartContext);
    const router = useRouter();
    const [forma, setForma] = useState(1);

    return (
        <>
        <Head>
          <title>Paso 2 Pago </title>
          <meta name="description" content="Paso 1 Pago - CifuMakers" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Container style={{marginTop: '40px'}}>
            <Row className="justify-content-center">
                
                <Col xs={11} sm={11} md={7} lg={7} xl={7} xxl={7}>
                    <Row>
                        <Col>
                          <h3 className="fw-normal">Datos de envío</h3>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '10px'}}>
                        {/* <Col xs={12} style={{marginBottom: '5px'}}>
                            <label className="col-form-label fs-5 fw-normal">Elige una opción</label>
                        </Col>
                        <Col xs={6} sm='auto'>
                            <ToggleButton id={1} variant={forma==1? 'primary' : 'outline-primary'} type='button' onClick={ () => setForma(1) }>Envio a domicilio</ToggleButton>
                        </Col>
                        <Col xs={6} sm='auto' >
                            <ToggleButton id={2} variant={forma==2? 'primary' : 'outline-primary'}  type="button" onClick={ () => setForma(2) }>Retiro en agencia</ToggleButton>
                        </Col> */}
                    </Row>
                    {/* {forma==1? 
                    <> */}
                    <EnvioDomicilio /> 
                    {/* </>
                    : <EnvioAgencia />} */}

                </Col>

                <Col xs={11} sm={8} md={5} lg={5} xl={3} xxl={3} style={{marginTop: '25px'}}>
                    <Carrito2CheckOut carrito={cart}/>
                </Col>

            </Row>
            <div style={{marginTop: '100px'}}>

            </div>
        </Container>
        </>

    );
}

export default CheckoutPage2;

