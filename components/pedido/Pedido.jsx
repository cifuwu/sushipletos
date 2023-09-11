import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProductoPedido from "./ProductoPedido";
import ReactCanvasConfetti from "react-canvas-confetti";

import { CartContext } from "@/contexts/cart/CartContext";
import Image from "next/image";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const tipo_pago = (tipo) => {
  if (tipo == "VD") {
    return "Venta Débito";
  } else if (tipo == "VN") {
    return "Venta Normal";
  } else if (tipo == "VC") {
    return "Venta en cuotas";
  } else if (tipo == "S1") {
    return "3 cuotas sin interés";
  } else if (tipo == "S2") {
    return "2 cuotas sin interés";
  } else if (tipo == "NC") {
    return "N cuotas sin interés";
  } else if (tipo == "VP") {
    return "Venta Prepago";
  }
  return "Desconocido";
};

function Pedido({ data, transbank }) {
  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);
  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);
  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    // if (transbank) {
    //   setCart([]);
    // }
    setTimeout(() => {
      fire();
    }, 1750);
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center" style={{ marginTop: "30px" }}>
          <Col className="col-auto text-center">
            <h2>Pedido #{data.orden} confirmado!! 🤝</h2>
          </Col>
        </Row>

        <Row style={{ marginTop: "25px" }}>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
            style={{ marginBottom: "30px" }}
          >
            <Row style={{ marginBottom: "7px" }}>
              <Col xs={12}>
                <h4>Datos de pago:</h4>
              </Col>
            </Row>

            <Row style={{ marginBottom: "30px" }}>
              <Col xs={12}>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Row className="row align-items-center">
                      <Col xs={4} sm={4} md={4} lg={3}>
                        <h6>Método:</h6>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={9}>
                        <h6 className="text-break fw-normal">{data.medio_pago == 'W' ? 'WebPay': 'Mercado Pago'}</h6>
                      </Col>
                    </Row>

                    {transbank ? (
                      <>
                        <Row className="row align-items-center">
                          <Col xs={4} sm={4} md={4} lg={3}>
                            <h6>Estado de la transacción:</h6>
                          </Col>
                          <Col xs={8} sm={8} md={8} lg={9}>
                            <h6 className="text-break fw-normal">
                              {transbank?.status}
                            </h6>
                          </Col>
                        </Row>

                        <Row className="row align-items-center">
                          <Col xs={4} sm={4} md={4} lg={3}>
                            <h6>Orden de compra:</h6>
                          </Col>
                          <Col xs={8} sm={8} md={8} lg={9}>
                            <h6 className="text-break fw-normal">
                              {transbank?.buy_order}
                            </h6>
                          </Col>
                        </Row>

                        <Row className="row align-items-center">
                          <Col xs={4} sm={4} md={4} lg={3}>
                            <h6>últimos 4 dígitos de tarjeta usada:</h6>
                          </Col>
                          <Col xs={8} sm={8} md={8} lg={9}>
                            <h6 className="text-break fw-normal">
                              {transbank?.card_detail.card_number}
                            </h6>
                          </Col>
                        </Row>

                        <Row className="row align-items-center">
                          <Col xs={4} sm={4} md={4} lg={3}>
                            <h6>Forma de pago:</h6>
                          </Col>
                          <Col xs={8} sm={8} md={8} lg={9}>
                            <h6 className="text-break fw-normal">
                              {tipo_pago(transbank?.payment_type_code)}
                            </h6>
                          </Col>
                        </Row>
                      </>
                    ) : null}
                  </li>
                </ul>
              </Col>
            </Row>

            <Row style={{ marginBottom: "7px" }}>
              <Col xs={12}>
                <h4>Datos de Envío:</h4>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Row className="row align-items-center">
                      <Col xs={4} sm={4} md={4} lg={3}>
                        <h6>Nombre:</h6>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={9}>
                        <h6 className="text-break fw-normal">
                          {data?.usuario?.nombres}
                        </h6>
                      </Col>
                    </Row>
                    <Row className="row align-items-center">
                      <Col xs={4} sm={4} md={4} lg={3}>
                        <h6>Apellidos:</h6>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={9}>
                        <h6 className="text-break fw-normal">
                          {data?.usuario?.apellidos}
                        </h6>
                      </Col>
                    </Row>
                    <Row className="row align-items-center">
                      <Col xs={4} sm={4} md={4} lg={3}>
                        <h6>Rut:</h6>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={9}>
                        <h6 className="text-break fw-normal">
                          {data?.usuario?.rut}
                        </h6>
                      </Col>
                    </Row>
                    <Row className="row align-items-center">
                      <Col xs={4} sm={4} md={4} lg={3}>
                        <h6>Teléfono:</h6>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={9}>
                        <h6 className="text-break fw-normal">
                          {data?.usuario?.telefono}
                        </h6>
                      </Col>
                    </Row>
                    <Row className="row align-items-center">
                      <Col xs={4} sm={4} md={4} lg={3}>
                        <h6>Correo:</h6>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={9}>
                        <h6 className="text-break fw-normal">
                          {data?.usuario?.correo}
                        </h6>
                      </Col>
                    </Row>

                    {data?.direccion ? (
                      <>
                        <Row>
                          <Col>
                            <hr />
                          </Col>
                        </Row>

                        <Row className="row align-items-center">
                          <Col xs={4} sm={4} md={4} lg={3}>
                            <h6>Región</h6>
                          </Col>
                          <Col xs={8} sm={8} md={8} lg={9}>
                            <h6 className="text-break fw-normal">
                              {data?.direccion?.region}
                            </h6>
                          </Col>
                        </Row>
                        <Row className="row align-items-center">
                          <Col xs={4} sm={4} md={4} lg={3}>
                            <h6>Comuna:</h6>
                          </Col>
                          <Col xs={8} sm={8} md={8} lg={9}>
                            <h6 className="text-break fw-normal">
                              {data?.direccion?.comuna}
                            </h6>
                          </Col>
                        </Row>
                        <Row className="row align-items-center">
                          <Col xs={4} sm={4} md={4} lg={3}>
                            <h6>Dirección:</h6>
                          </Col>
                          <Col xs={8} sm={8} md={8} lg={9}>
                            <h6 className="text-break fw-normal">
                              {data?.direccion?.direccion}
                            </h6>
                          </Col>
                        </Row>
                        <Row className="row align-items-center">
                          <Col xs={4} sm={4} md={4} lg={3}>
                            <h6>Número:</h6>
                          </Col>
                          <Col xs={8} sm={8} md={8} lg={9}>
                            <h6 className="text-break fw-normal">
                              #{data?.direccion?.numero}
                            </h6>
                          </Col>
                        </Row>
                        {data?.direccion?.numero_depto ? (
                          <Row className="row align-items-center">
                            <Col xs={4} sm={4} md={4} lg={3}>
                              <h6>Depto / Condominio:</h6>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={9}>
                              <h6 className="text-break fw-normal">
                                {data.direccion?.numero_depto}
                              </h6>
                            </Col>
                          </Row>
                        ) : null}
                        {data?.direccion.comentario ? (
                          <Row className="row align-items-center">
                            <Col xs={4} sm={4} md={4} lg={3}>
                              <h6>Comentarios:</h6>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={9}>
                              <h6 className="text-break fw-normal">
                                {data?.direccion?.comentario}
                              </h6>
                            </Col>
                          </Row>
                        ) : null}
                      </>
                    ) : null}

                    <Row>
                      <Col>
                        <hr />
                      </Col>
                    </Row>

                    <Row className="row align-items-center">
                      <Col xs={4} sm={4} md={4} lg={3}>
                        <h6>Método de envío:</h6>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={9}>
                        <h6 className="text-break fw-normal">
                          {data?.courier?.nombre}
                        </h6>
                      </Col>
                    </Row>
                    <Row className="row align-items-center">
                      <Col xs={4} sm={4} md={4} lg={3}>
                        <h6>Seguimiento:</h6>
                      </Col>
                      <Col xs={8} sm={8} md={8} lg={9}>
                        {data?.estado_pedido == 'P' ?  (
                          <h6 className="text-break fw-normal">
                            Pedido en preparación
                          </h6>
                        ):null}
                      </Col>
                    </Row>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row style={{ marginBotton: "7px" }}>
              <Col>
                <h4>Productos:</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul className="list-group">
                  {data?.carrito?.elecciones?.map((eleccion) => {
                    return (
                      <ProductoPedido key={eleccion.id} item={eleccion}></ProductoPedido>
                    );
                  })}

                  <li className="list-group-item">
                    <Row>
                      <Col
                        xs={2}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Image
                          loading="lazy"
                          className="rounded img-fluid"
                          src={data.courier?.logo}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
                          width={50}
                          height={50}
                          alt='courier'
                        />
                      </Col>

                      <Col xs={6} className="align-items-center">
                        <h6 className="fw-normal">Método de envío:</h6>
                        <h5 className="fw-normal">{data.courier?.nombre}</h5>
                      </Col>
                      <Col
                        xs={1}
                        className="d-lg-flex justify-content-lg-end align-items-lg-center"
                      >
                        <small className="fs-6 text-success d-lg-flex align-items-end justify-content-lg-end align-items-lg-center">
                          {" "}
                        </small>
                      </Col>

                      <Col
                        xs={3}
                        className="d-lg-flex justify-content-lg-end align-items-lg-center"
                      >
                        <small className="fs-6 text-success d-lg-flex align-items-end justify-content-lg-end align-items-lg-center">
                          ${data?.valor_envio?.toLocaleString("es-CL")}
                        </small>
                      </Col>
                    </Row>
                  </li>

                  <li className="list-group-item">
                    <Row>
                      <Col
                        xs={3}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <h2 className="fw-normal">Total:</h2>
                      </Col>

                      <Col xs={5} className="align-items-center">
                        <h6 className="fw-normal"></h6>
                        <h5 className="fw-normal"></h5>
                      </Col>

                      <Col
                        xs={4}
                        className="d-lg-flex justify-content-lg-end align-items-lg-center"
                      >
                        <small className="fs-4 text-success d-lg-flex align-items-end justify-content-lg-end align-items-lg-center">
                          ${data?.total?.toLocaleString("es-CL")}
                        </small>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <div style={{ marginTop: "200px" }}></div>
      </Container>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}

export default Pedido;
