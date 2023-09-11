import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import sin_imagen from '@/assets/sin-imagen.webp'
import styles from '../styles/ProductCard.module.css'
import Image from "next/image";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import Link from "next/link";
import { Carousel, Container } from "react-bootstrap";

function Productcard({titulo,precio,miniatura_1, miniatura_2 ,marca, id , categoria, descuento}) {
  const router = useRouter()
  const [imagen, setImagen] = useState(0);
  const gotoProducto = (e) => {
    e.preventDefault();
    router.push('/producto/'+id);
  }
  

  return (
    

    <Col xs={6} sm={6} md={4} lg={4} xl={3} xxl={3}>
      <Link href={'/producto/'+id} style={{textDecoration: 'none'}}>

      {/* ///////////////////////////////// ANIMACION DE ENTRADA ////////////////////////////////////////////////
      // quitar si el rendimiento de las animaciones no es adecuado!
      // probabalemente deba arreglarlo en función de si es un teléfono o no */}
      <motion.div 
      animate={{ y: [-50,0]  }}
      transition={{}}>

      <div
        className={`${styles.carta} card text-center border rounded position-relative`}
        //animate__animated animate__fadeIn
        style={{ minWidth: "110px", maxWidth: "300px" , minHeight: '300px'}}
        onClick={gotoProducto}
        onMouseEnter={()=>setImagen(1)}
        onMouseLeave={()=>setImagen(0)}
      >
        <div className="card-body" >
        {miniatura_2?
        <Carousel activeIndex={imagen} controls={false} slide={false} touch={false} keyboard={false} indicators={false} interval={null}>
          <Carousel.Item>
            <Image
            loading="lazy"
            alt={titulo}
            className="imagen rounded img-fluid imagen-noarrastrable"
            src={miniatura_1}
            width={300}
            height={300}
            style={{ marginBottom: "15px" }}
            title={titulo}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
          />
          </Carousel.Item>
          <Carousel.Item>
            <Image
            loading="lazy"
            alt={titulo}
            className="imagen rounded img-fluid imagen-noarrastrable"
            src={miniatura_2}
            width={300}
            height={300}
            style={{ marginBottom: "15px" }}
            title={titulo}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
          />
          </Carousel.Item>
        </Carousel>
        :
        <Image
            loading="lazy"
            alt={titulo}
            className="imagen rounded img-fluid imagen-noarrastrable"
            src={miniatura_1? miniatura_1 : sin_imagen}
            width={300}
            height={300}
            style={{ marginBottom: "15px" }}
            title={titulo}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
          />
        }


          <p className="fs-5 text-dark fw-normal card-title">{titulo}</p>
          <p className="fs-6 fw-light text-muted card-subtitle mb-2">
            {categoria}
          </p>
          {descuento?
          <p
            style={{ marginTop: "15px" }}
          >
            <span className="fs-5 fw-light text-secondary card-text" style={{textDecoration: 'line-through', marginRight: 0}}>${precio?.toLocaleString('es-CL')}</span>
            <span className="fs-5 fw-normal text-success card-text" style={{ marginLeft: 0}}> ${(precio-descuento)?.toLocaleString('es-CL')} </span>
          </p>
          :
          <p
            className="fs-5 fw-normal text-success card-text "
            style={{ marginTop: "15px" }}
          >
            ${precio?.toLocaleString('es-CL')}
          </p>
          }
        </div>
      </div>

      </motion.div>
      </Link>
    </Col>
  
  
  );
}

export default Productcard;
