import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Productcard from "./Productcard";


function Filaproductos({productos, cantidad }) {
  return (
    <Row className='gy-3 mx-auto' style={{marginTop: '15px'}}>
      
      {productos?.map((producto) => {
        return(
          <Productcard id={producto.id} key={producto.id} categoria={producto.categoria} titulo={producto.nombre} miniatura_1={producto.fotos ? producto.fotos[0] : null} miniatura_2={producto.miniatura_2} precio={producto.precio} marca={producto.marca} descuento={producto.descuento}/>
        )
      })

      }
    </Row> 

  )
}

export default Filaproductos