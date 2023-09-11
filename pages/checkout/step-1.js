import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarritoCheckOut from "@/components/Pagoform/CarritoCheckOut";
import DatosPersonales from "@/components/Pagoform/DatosPersonales";
import Head from "next/head";
import { CartContext } from "@/contexts/cart/CartContext";

function CheckoutPage1() {
  const [cart, setCart] = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Paso 1 Pago </title>
        <meta name="description" content="Paso 1 Pago - CifuMakers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {cart.cont == 0 ? (
        <Container style={{ marginBottom: "350px", marginTop: "100px" }}>
          <Row className="justify-content-center align-items-center">
            <Col xs="auto">
              <h2>Tu carrito está vacío 🛍️</h2>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col xs="auto" className="text-center">
              <h5>¡Vuelve a la tienda y elige lo que más te guste! 👀</h5>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container style={{ marginTop: "40px" }}>
          <Row className="justify-content-center">
            <Col xs={11} sm={11} md={7} lg={7} xl={7} xxl={7}>
              <Row>
                <Col>
                  <h3>Datos Personales</h3>
                </Col>
              </Row>

              <DatosPersonales />
            </Col>

            <Col
              xs={11}
              sm={8}
              md={5}
              lg={5}
              xl={3}
              xxl={3}
              style={{ marginTop: "25px" }}
            >
              <CarritoCheckOut carrito={cart}/>
            </Col>
          </Row>

          <div style={{ marginTop: "100px" }}></div>
        </Container>
      )}
    </>
  );
}

export default CheckoutPage1;
