import Image from 'next/image';
import { useRouter } from 'next/router'
import { CartContext } from '@/contexts/cart/CartContext';
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Cookies from 'js-cookie';

import carga from '../assets/carga.png';
import { actualizarItem, cantidadProductos, getTotal } from '@/functions/CarritoFunciones';




export default function ProductoCart({producto, setCargando, cargando}) {
  const router = useRouter();
  const [cont, setCont] = useState(0)
  const [cart, setCart] = useContext(CartContext);

  const putCarritoAux = (carrito, id, contador) => {
    setCargando(true);

    const resp = actualizarItem(carrito, id, contador)

    const total = getTotal(resp);
    const contador2 = cantidadProductos(resp);
    const aux = {total: total, cont: contador2, elecciones: resp}

    setCart(aux);
    setCargando(false);
  }


  useEffect(()=>{
    setCont(producto.cantidad)
  },[producto])


  const updateContServer = () =>{
    putCarritoAux(cart.elecciones, producto.id, parseInt(cont))
  }


  return (
    <Row className='justify-content-center align-items-center'>
      <Col xs={3} sm={2} md={2} lg={2} xl={2} xxl={2} style={{textAlign: 'center'}} className='link-producto' onClick={(e)=>{e.preventDefault; router.push('/producto/'+producto.productoId); }}>
        <Image 
          loading="lazy" 
          className="rounded img-fluid shadow-sm" 
          src={producto.miniatura} 
          alt='carrito'
          width={120}  
          height={120}
          placeholder='blur'
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
          />
      </Col>

      <Col xs={5} sm={4} md={4} lg={4} xl={4} xxl={4} >
        <Row className='link-producto-texto' onClick={(e)=>{e.preventDefault; router.push('/producto/'+producto.productoId);}}>
          <Col>
            <h1 className="fs-4 fw-normal"> {producto.nombre} </h1>
          </Col>
        </Row>

        <Row>
        {producto.elecciones?.map( (elemento) => {
          return(
            <Col xs={12} key={elemento.id}>
              <p className='fs-6 fw-normal text-muted'> {elemento.tipo_variacion}: {elemento.valor_variacion}</p>
            </Col>
          )
        })}
        {producto.comentario? 
          <Col xs={12}>
            <p className='fs-6 fw-normal text-muted'> {producto.comentario.producto}: {producto.comentario.eleccion}</p>
          </Col>
        :null}
        </Row>

        <Row>
          {producto.descuento?
          <Col>
            <span className="fs-6 fw-light text-secondary " style={{textDecoration: 'line-through', marginRight: 7}}>${producto.precio_unitario?.toLocaleString('es-CL')}</span>
            <span className="fs-5 fw-normal text-success " style={{ marginLeft: 0}}> ${(producto.valor-producto.descuento)?.toLocaleString('es-CL')} </span>
          </Col>
          :
          <Col>
            <p className="fs-5 fw-normal text-success">${producto.valor?.toLocaleString("es-CL")}</p>
          </Col>
          }
        </Row>

      </Col>

      <Col xs={3} sm={3} md={3} lg={3} xl={2} xxl={2}>
        <form><input className="form-control" disabled={cargando} type="number" onBlur={e=>{e.preventDefault(); updateContServer();}} value={cont} onChange={(e) => {e.preventDefault(); setCont(e.target.value)}} placeholder="cantidad" min="1" /></form>
      </Col>

      <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1} style={{marginLeft: '0px', marginRight: '0px'}}>
        <Button type="button" variant='' disabled={cargando} className="btn-close" aria-label="Close" onClick={(e) => {e.preventDefault(); putCarritoAux(cart.elecciones, producto.id, parseInt(0)) }}></Button>
      </Col>

      <Col xs={11} sm={10} md={10} lg={9} xl={9} xxl={9}>
          <hr />
      </Col>
    </Row>
  )
}
