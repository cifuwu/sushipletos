import React, { useContext, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Button, Card, Spinner } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ProductoCarritoCheckOut from "./ProductoCarritoCheckOut";
import { EnvioContext } from "@/contexts/envio/EnvioContext";
import mercadopago from '@/assets/1.png'
import webpay from "@/assets/2.png";
import { UserContext } from "@/contexts/user/UserContext";

import Image from "next/image";



function Carrito2CheckOut({carrito}) {
  const [costo, setCosto] = useState(0);
  const [envio, setEnvio] = useContext(EnvioContext);
  const [medio, setMedio] = useState('WebPay');

  const [courier, setCourier] = useState();
  useEffect(() => {
    setCourier(envio.courier);
    setCosto(envio.costo);
  }, []);

  useEffect(() => {
    setCourier(envio.courier);
    setCosto(envio.costo);
  }, [envio]);


  const [cargandoBoton, setCargandoBoton] = useState(false);
  const [respuesta, setRespuesta] = useState();
  

  const submit = (e) => {
    e.preventDefault();

    setCargandoBoton(true);

    ////////////////       PAGOO         //////////////////

    let datosPedido={};
    if (envio.agencia){
      datosPedido = {
        courier: envio.courierId,
        agencia: envio.agencia,
      };
    }
    else{
      datosPedido = {
        courier: envio.courierId,
        direccion: {
          comuna: envio?.comunaId,
          region: envio?.regionId,
          direccion: envio?.direccion,
          numero: envio?.numeroDireccion,
          numero_depto: envio?.depto,
          comentario: envio?.comentarios,
        }
      };
    }

    const postPedidoAux = async () => {
      // console.log(datosPedido)

    };

    postPedidoAux();
  };

  const comprobacion = (envio.courier && envio.direccion.length > 5 && envio.numeroDireccion) || envio.agencia;

  return (
    <>
      <Row style={{ marginBottom: "15px" }}>
        <Col className="text-center d-flex justify-content-start align-items-center">
          <span className="fs-4 fw-normal"> Tu pedido ❤️ </span>

          {/* <span className="badge rounded-pill bg-secondary fs-6" style={{marginLeft: '15px'}}>
              {cantidadProductos(cart)}
          </span> */}
        </Col>
      </Row>

      <Row className="justify-content-center" style={{}}>
        <Col>
          <ListGroup>
            {carrito.elecciones?.map((item) => {
              return <ProductoCarritoCheckOut key={item.id} item={item} />;
            })}

            <ListGroup.Item>
              <Row style={{ marginTop: "10px" }}>
                <Col xs={8}>
                  <span className="fw-normal">SubTotal:</span>
                  <span className="fs-6"></span>
                </Col>
                <Col xs={4}>
                  <small className="fs-6 text-success d-flex align-items-end justify-content-end align-items-center">
                    ${carrito.total?.toLocaleString("es-CL")}
                  </small>
                </Col>
              </Row>
              <hr />
              {courier ? (
                <>
                  <Row style={{ marginTop: "10px" }}>
                    <Col xs={8}>
                      <h5 className="fw-normal">Forma de envío:</h5>
                      <span className="fs-6">{envio.courier}</span>
                    </Col>
                    <Col
                      xs={4}
                      className="d-flex justify-content-end align-items-center"
                    >
                      {" "}
                      {costo == 0 ? (
                        <small className="fs-6 text-success d-flex align-items-end justify-content-end align-items-center">
                          Por pagar
                        </small>
                      ) : (
                        <small className="fs-6 text-success d-flex align-items-end justify-content-end align-items-center">
                          ${costo?.toLocaleString("es-CL")}
                        </small>
                      )}
                    </Col>
                  </Row>
                  <hr />
                </>
              ) : null}
              <Row>
                <Col xs={8}>
                  <h5 className="fw-normal">
                    <strong>Total:</strong>
                  </h5>
                  <span className="fs-6"></span>
                </Col>
                <Col xs={4}>
                  <small className="fs-5 text-success d-flex align-items-end justify-content-end align-items-center">
                    ${(carrito.total + costo)?.toLocaleString("es-CL")}
                  </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroupItem>
              <Row className="justify-content-center">
                <Col xs={12} className="text-center">
                  <h5 className="fw-normal"> Método de pago: </h5>
                  <p className="fw-normal">Seleccione un método de pago</p>
                </Col>
                <Col xs={7} md={8} xl={9} style={{marginBottom: 10}}>
                  <Card body onClick={e=>{e.preventDefault(); setMedio('WebPay')}} className={medio=='WebPay' ? "medio-pago-seleccionado" : "medio-pago"}>
                    <Image placeholder="blur" className="img-fluid" src={webpay} alt="" />
                  </Card>
                </Col>
                <Col xs={7} md={8} xl={9}>
                  <Card body onClick={e=>{e.preventDefault(); setMedio('MercadoPago')}} className={medio=='MercadoPago' ? "medio-pago-seleccionado" : "medio-pago"}>
                    <Image placeholder="blur"	 className="img-fluid" src={mercadopago} alt="" />
                  </Card>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>

      <Row className="justify-content-center" style={{ marginTop: "20px" }}>
        <Col xs={12} style={{}}>
          {cargandoBoton ? (
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Un momentito 🙏🏽
              </Button>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                className=""
                type="button"
                onClick={submit}
                disabled={!comprobacion}
              >
                Realizar pedido 🤝
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
}

export default Carrito2CheckOut;
