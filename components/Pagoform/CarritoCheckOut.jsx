import React, { useContext, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";

import ProductoCarritoCheckOut from "./ProductoCarritoCheckOut";
import { EnvioContext } from "@/contexts/envio/EnvioContext";

function CarritoCheckOut({ carrito }) {
  return (
    <>
      <Row style={{ marginBottom: "15px" }}>
        <Col className="text-center d-flex justify-content-start align-items-center">
          <span className="fs-4 fw-normal"> Tu pedido ❤️ </span>

          {/* <span className="badge rounded-pill bg-secondary fs-6" style={{marginLeft: '15px'}}>
                        {carrito.cont}
                    </span> */}
        </Col>
      </Row>

      <Row>
        <Col>
          <ListGroup>
            {carrito.elecciones?.map((item) => {
              return <ProductoCarritoCheckOut key={item.id} item={item} />;
            })}

            <ListGroup.Item>
              <Row>
                <Col xs={8}>
                  <h5 className="fw-normal">
                    <strong>Total:</strong>
                  </h5>
                  <span className="fs-6"></span>
                </Col>
                <Col xs={4}>
                  <small className="fs-5 text-success d-flex align-items-end justify-content-end align-items-center">
                    ${carrito.total?.toLocaleString("es-CL")}
                  </small>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default CarritoCheckOut;
