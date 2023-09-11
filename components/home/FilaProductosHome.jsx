import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Productcard from '../Productcard';
import { useState, useEffect } from 'react';

import Spinner from 'react-bootstrap/Spinner';
import { getPorductosHomeUrl } from '@/helpers/URL';



function FilaProductosHome({productos}) {

  return (
    <Row className='gy-3 mx-auto' style={{marginTop: '15px'}}>
      
      {productos?.map((producto) => {
        return(
          <Productcard id={producto.id} key={producto.id} categoria={producto.categoria} titulo={producto.nombre} miniatura_1={producto.miniatura} miniatura_2={producto.miniatura_2} precio={producto.precio} marca={producto.marca} descuento={producto.descuento}/>
        )
      })

      }
    </Row> 


  )
}

export default FilaProductosHome