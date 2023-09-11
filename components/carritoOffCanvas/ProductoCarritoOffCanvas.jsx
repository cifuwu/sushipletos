import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import sinImagen from "../../assets/sin-imagen.webp";



function ProductoCarritoOffCanvas({ item, cerrar }) {
  const router = useRouter();

  return (
    <Row>
      <Col
        xs={4}
        className="d-flex align-items-center link-producto"
        onClick={(e) => {
          e.preventDefault;
          cerrar();
          router.push("/producto/" + item.idProducto);
        }}
      >
        <Image
          width={100}
          height={100}
          placeholder="blur"
          alt="carrito"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
          loading="lazy"
          className="rounded img-fluid"
          src={item.miniatura ? item.miniatura : sinImagen}
        />
      </Col>
      <Col xs={5} className="d-flex align-items-center">
        <Row>
          <Col
            xs={12}
            className="link-producto-texto"
            onClick={(e) => {
              e.preventDefault;
              cerrar();
              router.push("/producto/" + item.idProducto);
            }}
          >
            <h5 className="fw-normal ">{item.nombre}</h5>
          </Col>

          {item.elecciones?.map((elemento) => {
            return (
              <Col xs={12} key={elemento.id}>
                <span className="fs-6">
                  {elemento.tipo_variacion}: {elemento.valor_variacion}
                </span>
              </Col>
            );
          })}
          {item.comentario?
            <Col xs={12}>
              <span className="fs-6">
                {item.comentario.producto}: {item.comentario.eleccion}
              </span>
            </Col>
          :null}
        </Row>
      </Col>
      <Col xs={3} className="d-flex justify-content-end align-items-center">
        <small
          style={{ marginRight: "5px" }}
          className="fs-5 d-flex align-items-end justify-content-end align-items-center"
        >
          {item.cantidad + "x"}
        </small>
        {item.descuento ? (
          <div>
            <small
              style={{ textDecoration: "line-through" }}
              className="fs-6 text-secondary d-flex align-items-end justify-content-end align-items-center"
            >
              ${item?.precio_unitario?.toLocaleString("es-CL")}
            </small>
            <small className="fs-6 text-success d-flex align-items-end justify-content-end align-items-center">
              ${(item.precio_unitario - item.descuento)?.toLocaleString("es-CL")}
            </small>
          </div>
        ) : (
          <small className="fs-6 text-success d-flex align-items-end justify-content-end align-items-center">
            ${item?.valor?.toLocaleString("es-CL")}
          </small>
        )}
      </Col>
      <Col xs={12} className="">
        <hr />
      </Col>
    </Row>
  );
}

export default ProductoCarritoOffCanvas;
