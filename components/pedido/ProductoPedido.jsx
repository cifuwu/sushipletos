import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import carga from "../../assets/carga.png";



export default function ProductoPedido({ item }) {

  return (
    <li className="list-group-item">
      <Row>
        <Col xs={3} className="d-flex align-items-center">
          <Image
            loading="lazy"
            className="rounded img-fluid"
            src={item.producto.miniatura}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
            width={88}
            height={88}
            alt='producto'
          />
        </Col>
        <Col xs={6}>
          <h5 className="fw-normal">{item.producto.nombre}</h5>

          {item.variante?.valor_variacion?.map((variacion) => {
            return (
              <div key={variacion.id}>
                <span className="fs-6">
                  <strong>{variacion.tipo_variacion}: </strong>{" "}
                  {variacion.valor_variacion}
                </span>{" "}
                <br></br>
              </div>
            );
          })}
          {item.comentarios?.map((comentario)=>{
            return(
              <div key={comentario.id}>
                <span className="fs-6">
                  <strong>{comentario.tipo_variacion}: </strong>{" "}
                  {comentario.comentario}
                </span>{" "}
                <br></br>
              </div>
            )
          })
          }
        </Col>
        <Col xs={1} className="d-flex justify-content-end align-items-center">
          <small className="fs-6 d-flex align-items-end justify-content-end">
            {item.cantidad}x
          </small>
        </Col>
        <Col xs={2} className="d-flex justify-content-end align-items-center">
        {item.descuento?
          <Row>
            <Col xs={12} className="justify-content-end">
              <span className="fs-6 fw-light text-secondary" style={{textDecoration: 'line-through', marginRight: 0}}>${item.precio_unitario?.toLocaleString('es-CL')}</span>
            </Col>
            <Col xs={12} className="justify-content-end">
              <span className="fs-6 fw-normal text-success " style={{ marginLeft: 0}}> ${(item.precio_unitario-item.descuento)?.toLocaleString('es-CL')} </span>
            </Col>
          </Row>
          :
          <Row>
            <Col xs={12}>
              <p className="fs-6 fw-normal text-success" style={{marginTop: 15}}>${item.precio_unitario?.toLocaleString("es-CL")}</p>
            </Col>
          </Row>
          }
        </Col>
      </Row>
    </li>
  );
}
