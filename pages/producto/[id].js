import React, { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Head from "next/head";

import { CartContext } from "../../contexts/cart/CartContext";
import { Badge, Button, Card, Container, Spinner, OverlayTrigger,Tooltip, FloatingLabel, Form } from "react-bootstrap";

import { motion, MotionConfig } from "framer-motion";


import Image from "next/image";
import { useRouter } from "next/router";
import { Carousel } from "react-bootstrap";
import Filaproductos from "@/components/Filaproductos";
import Cookies from "js-cookie";
import FechaEnvio from "@/components/Producto/FechaEnvio";
import AlertaProducto from "@/components/Producto/AlertaProducto";
import CarruselProducto from "@/components/Producto/CarruselProducto";
import ListaImagenes from "@/components/Producto/ListaImagenes";
import ContadorProducto from "@/components/Producto/ContadorProducto";
import ComentarioProducto from "@/components/Producto/ComentarioProducto";


import { productos_lista } from "@/helpers/data";
import { agregarItem, cantidadProductos, getTotal } from "@/functions/CarritoFunciones";


function Producto({producto}) {
  const router = useRouter();

  let id = router.query.id - 1
  if(!id){
    id = 0
  }
  const [imagenes, setImagenes] = useState(producto.fotos)
  
  const [imagen, setImagen] = useState(0);
  const [cart, setCart] = useContext(CartContext);
  const [cont, setCont] = useState(1);
  const [show, setShow] = useState(false);
  const [variaciones, setVariaciones] = useState({});
  const [disable, setDisable] = useState(false);
  const [variantes, setVariantes] = useState([]);
  const [variante, setVariante] = useState({});
  const [cargando, setCargando] = useState(false);
  const [comentarios, setComentarios] = useState({});



  const variar = (eleccion, variacion) => {
      setVariaciones({...variaciones, [variacion]: parseInt(eleccion) });
    };


  useEffect(() => {
    setShow(false);
    setImagen(0);

  }, [producto]);

  // useEffect(()=>{
  //   let id = router.query.id - 1
  //   if(!id){
  //     id = 0
  //   }
  //   setProducto(productos_lista[id])
  //   setImagenes(productos_lista[id].fotos)

  // },[router])

  const agregarCarrito = async () => {
    setShow(false);
    setCargando(true);
    const resp = agregarItem(cart.elecciones, 
      {
      "nombre": producto.nombre,
      "categoria": producto.categoria,
      "precio": producto.precio,
      "descuento": 0,
      "miniatura": producto.fotos ? producto.fotos[0] : null,
      "id": producto.id,
      "miniatura_2": null
      },
      cont
      )
    const total = getTotal(resp);
    const contador = cantidadProductos(resp);
    const aux = {total: total, cont: contador, elecciones: resp}
    setShow(true);
    setCart(aux);
    setCont(1);
    setCargando(false);
  }

  const submit = (e) => {
    e.preventDefault();
    agregarCarrito();
  };



  if (router.isFallback) {
    return <div>Cargando...</div>;
  }



  return (
    <>
      <Head>
        <title>{producto.nombre + ' | sushipletos'}</title>
        <meta
          name="description"
          content={producto.descripcion_corta + " | sushipletos"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        {/* ///////////////////////////////// ANIMACION DE ENTRADA ////////////////////////////////////////////////
        // quitar si el rendimiento de las animaciones no es adecuado!
        // probabalemente deba arreglarlo en función de si es un teléfono o no */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <form onSubmit={submit}>
            <Row></Row>
            <Row
              className="row-cols-1 row-cols-sm-1 row-cols-md-2 justify-content-center"
              style={{ marginTop: "30px" }}
            >
              <Col
                style={{
                  paddingBotton: "30px",
                  PaddingLeft: "30px",
                  paddingRight: "30px",
                  marginBottom: "30px",
                }}
              >
                <Row className="justify-content-center">
                  <Col xs="auto">
                    <CarruselProducto imagen={imagen} setImagen={setImagen} imagenes={imagenes} nombreProducto={producto.nombre}/>
                  </Col>
                </Row>

                <Row
                  className="gy-2 justify-content-start align-items-start"
                  style={{ marginTop: "10px" }}
                >
                  <ListaImagenes imagenes={imagenes} setImagen={setImagen} imagen={imagen} nombreProducto={producto.nombre}/>
                
                </Row>
              </Col>
              <Col style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                <Row>


                  <Col>
                    <div className="">
                      <p className="fs-5 fw-light text-dark">
                        {" "}
                        {producto.marca}{" "}
                      </p>
                      <h1 className="fs-1 fw-normal text-dark">
                        {producto.nombre}
                      </h1>

                      <p className="fs-4 text-success">
                        ${producto.precio?.toLocaleString("es-CL")}
                      </p>

                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: producto.descripccion,
                      }}
                      style={{ marginBottom: "30px" }}
                    ></div>

                  </Col>


                </Row>

                <hr />
                <Row className="justify-content-start align-items-start">
                  
                  <AlertaProducto show={show} setShow={setShow}/>

                  <ContadorProducto cont={cont} setCont={setCont}/>

                  <Col xs={10} sm={7} md={12} lg={7} xl={6} xxl={5}>
                    <div className="d-grid gap-2">
                      {!cargando? 
                      <Button
                        //onClick={(e)=>{e.preventDefault(); setShow(true); setCont(1);}}
                        className=""
                        type="submit"
                        size="lg"
                        disabled={disable}
                      >
                        <Row className="justify-content-between">
                          <Col xs="auto" className="fs-6">
                            Añadir al carrito
                          </Col>
                            <Col xs="auto" className="fs-6">
                              $
                              {(producto.precio * cont)?.toLocaleString("es-CL")}
                            </Col>
                        </Row>
                      </Button>
                      :
                      <Button variant="primary" size="lg" disabled>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />{" "}
                        Agregando al carrito
                      </Button>
                    }


                    </div>
                  </Col>
                  <hr className="mt-3"></hr>
                </Row>
                

                <div style={{ marginTop: "40px" }}></div>

              </Col>
            </Row>
          </form>
        </motion.div>

        {producto.relacionados ? (
          <Row style={{ marginTop: 35 }}>
            <Col>
              <Row>
                <h2 className="fw-normal text-dark">Productos relacionados:</h2>
                <p className="fs-5 fw-normal text-dark">
                  Mira, productos similares 👀
                </p>
              </Row>

              <Filaproductos productos={producto.relacionados} />
            </Col>
          </Row>
        ) : null}
      </Container>
    </>
  );
}

export default Producto;




export async function getServerSideProps({ params }) {
  const id = params.id
  console.log(id)
  const resp = await fetch("http://localhost:8090/graphql",
    {
    headers: {'Content-Type' : 'application/json'},
    method: 'post',
    body: JSON.stringify(
      {query: `query AllProductos($findProductoByIdId: ID!) {
        findProductoById(id: $findProductoByIdId) {
          categoria
          descripccion
          fotos {
            id
            url
          }
          id
          nombre
          precio
        }
      }`,
      variables: `{
        "findProductoByIdId": "${id}"
      }` 
      })})
  .then(result => result.json())
  .catch(err => console.log(err))

  console.log(resp.data)
  const producto = resp.data.findProductoById
  return { props: { producto } }
}

