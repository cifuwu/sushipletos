import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-bootstrap';

function CarruselProducto({imagen, setImagen, imagenes, nombreProducto}) {
  return (
    <Carousel
      activeIndex={imagen}
      indicators={false}
      onSelect={(e) => {
        setImagen(e);
      }}
      interval={null}
      slide={false}
      nextIcon={
        <span
          aria-hidden="true"
          className="carousel-control-next-icon"
          style={{ transform: "scale(1.5)" }}
        />
      }
      prevIcon={
        <span
          aria-hidden="true"
          className="carousel-control-prev-icon"
          style={{ transform: "scale(1.5)" }}
        />
      }
    >
      {imagenes?.map((imagen_) => {
        return (
          <Carousel.Item key={imagen_.id + "carrusel"}>
            <Image
              className="img-fluid rounded imagen-noarrastrable"
              src={imagen_.foto}
              height={500}
              width={500}
              quality={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKbS7WlJVXX6ACD/2Q=="
              alt={nombreProducto + " " + imagen_.titulo}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  )
}

export default CarruselProducto