import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

import { categorias } from "@/helpers/data";


import Image from "next/image";
import logo from "../../public/logo_2.png";


import { CartContext } from "../../contexts/cart/CartContext";
import CarritoOffCanvas from "../carritoOffCanvas/CarritoOffCanvas";
import { Button } from "react-bootstrap";

import { MdShoppingCart } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";

import Boton from "./components/Boton";
import DropdownNav from "./components/DropdownNav";




function Navbar() {
  const [cart, setCart] = useContext(CartContext);

  const [mostrarCanvas, setCanvas] = useState(false);
  const [mostrarCarrito, setCarrito] = useState(false);

  const canvasClose = () => setCanvas(false);
  const canvasShow = () => setCanvas(true);

  const carritoCerrar = () => setCarrito(false);
  const carritoAbrir = () => setCarrito(true);

  const [cantidad, setCantidad] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);

  const router = useRouter()


  useEffect(()=>{
    if(cart.total != null){
      setCantidad(cart.cont);
      setTotalCarrito(cart.total);}
  },[cart])


  const [busqueda, setBusqueda] = useState('');


  return (
    <div>
      <Container fluid>
        <Row
          className="text-bg-light d-none d-lg-block"
          style={{ padding: "4px", marginBotton: "10px" }}
        >
          <Col>
            <h4 className="fs-6 fw-light text-center">
              El mejor sushi de la galaxia 🚀
            </h4>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "5px" }} fluid="lg">

        {/* NAVBAR */}

        <Row>

          {/* ---- COL NAV IZQUIERDA */}

          <Col className="align-self-center">
            <Row>
              <Col xs={8}>
                <form className="d-none d-md-block" onSubmit={e=>{e.preventDefault(); router.push('/busqueda/'+busqueda); setBusqueda('');}}>
                  <input
                    className="border rounded-pill border-1 border-dark form-control"
                    type="search"
                    name="search"
                    placeholder="Búsqueda"
                    value={busqueda}
                    onChange={e=>{setBusqueda(e.target.value)}}
                  />
                </form>
                <GoThreeBars className="boton d-md-none" style={{transform: 'scale(2)', margin: '3px'}} onClick={canvasShow}/>
              </Col>
            </Row>
          </Col>

          {/* ---- COL NAV CENTRO ----- */}

          <Col  className="text-center">
            <Image
              className="img-fluid"
              src={logo}
              alt='cifumakers'
              width={75}
              height={75}
              onClick={(e) => {e.preventDefault(); router.push('/');}}
              style={{cursor: "pointer", minHeight:'50', minWidth:'50'}}
            />
          </Col>

          {/* ---- COL NAV DERECHO ------ */}

          <Col className="align-self-center ">
            <Row className="justify-content-end ">

                  <Col xs='auto' className="my-auto">
                    <Button size="" className="position-relative caca d-none d-md-block" variant="outline-dark" onClick={(e) => {e.preventDefault(); setCarrito(true)}}>
                      ${totalCarrito?.toLocaleString("es-CL")} {' '}
                      <MdShoppingCart style={{transform: 'scale(2)', marginLeft: '13px', marginBottom: '4px', marginTop: '4px'}}/>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary " >
                        {cantidad}
                      </span>
                    </Button>

                    <Button size="xl" className="position-relative caca d-md-none" variant="outline-dark" onClick={(e) => {e.preventDefault(); setCarrito(true)}}>
                      <MdShoppingCart style={{transform: 'scale(1.9)', margin: '3px', marginLeft: '7px'}}/>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary " >
                        {cantidad}
                      </span>
                    </Button>

                  </Col>
            </Row>
          </Col>
        </Row>


        {/* ------------ FILA SECTOR BOTONES NAVBAR -------------- */}
{/* 
        <div className="d-none d-md-block ">
          <Row
            className="justify-content-center align-items-center"
            style={{ marginTop: "15px" }}
          >
            <Boton link={'/'} texto={'Inicio'}/>
           
            <DropdownNav items={categorias} texto={'Categorias'}/>

            <Boton link='/tienda' texto='Tienda'/>

            <Boton link='/sobreEnvios' texto='Sobre envios'/>

            <Boton link='/informacion' texto='Información'/>

          </Row>
        </div> */}
      </Container>

      <hr style={{ marginTop: "5px" }} />



      {/* MENU OFFCANVAS PARA TELEFONOS */}

      {/* <Offcanvas
        show={mostrarCanvas}
        onHide={canvasClose}
        style={{ maxWidth: "300px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CifuMakers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="position-relative" >
          <Row>
            <Col xs={12}>
              <hr />
              <Link href={'/'}>
              <button
                  className="btn btn-primary btn-lg fs-5 fw-light link-dark bg-white border-0 "
                  type="button"
                  onClick={(e)=>{e.preventDefault; canvasClose(); }}
                >
                  Inicio
              </button>
              </Link>
              <hr />
            </Col>
            <Col xs={12}>
              <Link href={'/tienda'}>
              <button
                  className="btn btn-primary btn-lg fs-5 fw-light link-dark bg-white border-0 "
                  type="button"
                  onClick={(e)=>{e.preventDefault; canvasClose(); }}
                >
                  Tiendita
              </button>
              </Link>
              <hr />
            </Col>

            <Col xs={12}>
              <Link href={'/sobreEnvios'}>
              <button
                  className="btn btn-primary btn-lg fs-5 fw-light link-dark bg-white border-0 "
                  type="button"
                  onClick={(e)=>{e.preventDefault; canvasClose(); }}
                >
                  Sobre envios
              </button>
              </Link>
              <hr />
            </Col>

            <Col xs={12}>
              <Link href={'/informacion'}>
              <button
                  className="btn btn-primary btn-lg fs-5 fw-light link-dark bg-white border-0 "
                  type="button"
                  onClick={(e)=>{e.preventDefault; canvasClose(); }}
                >
                  Información
              </button>
              </Link>
              <hr />
            </Col>

          </Row>

        </Offcanvas.Body>
      </Offcanvas> */}


      {/* ------ CARRITO OFFCANVAS ------ */}

      <CarritoOffCanvas
        abrir={carritoAbrir}
        cerrar={carritoCerrar}
        estado={mostrarCarrito}
      />

      
    </div>
  );
}

export default Navbar;


