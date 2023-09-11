import React, { useContext, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";
import Image from "next/image";
import sinImagen from "../../assets/sin-imagen.webp";


function ProductoCarritoCheckOut({ item }) {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={3} className="d-flex align-items-center">
          <Image
            className="rounded img-fluid"
            src={item.miniatura ? item.miniatura : sinImagen}
            width={70}
            height={70}
            alt="carrito"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
          />
        </Col>
        <Col xs={6}>
          <h5 className="fw-normal">{item.nombre}</h5>
          {item.elecciones?.map((elemento) => {
            return (
              <span className="fs-6 fluid" key={elemento.id}>
                 {elemento.tipo_variacion} : {elemento.valor_variacion} <br></br>
              </span>
            );
          })}
          {item.comentario?
            <span className="fs-6 fluid" >
              {item.comentario.producto} : {item.comentario.eleccion} <br></br>
            </span>
          :null}
        </Col>
        <Col xs={3} className="d-flex justify-content-end align-items-center">
          <small className="fs-6 d-flex align-items-end justify-content-end align-items-center">
            {item.cantidad+"x"}
          </small>
          {item.descuento ? (
            <div>
              <small
                style={{ textDecoration: "line-through" }}
                className="fs-6 text-secondary d-flex align-items-end justify-content-end align-items-center"
              >
                ${item.valor?.toLocaleString("es-CL")}
              </small>
              <small className="fs-6 text-success d-flex align-items-end justify-content-end align-items-center">
                $
                {(item.valor - item.descuento)?.toLocaleString(
                  "es-CL"
                )}
              </small>
            </div>
          ) : (
            <small className="fs-6 text-success d-flex align-items-end justify-content-end align-items-center">
              ${item.valor?.toLocaleString("es-CL")}
            </small>
          )}
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default ProductoCarritoCheckOut;
