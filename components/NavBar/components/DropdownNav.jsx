import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Col, Dropdown } from 'react-bootstrap';

function DropdownNav({texto, items}) {
  const router = useRouter();
  const [show, setShow] = useState(false)
  const mostrar = () => setShow(true);
  const ocultar = () => setShow(false);

  return (
    <Col xs="auto" className="d-none d-md-block ">
      <Dropdown>
        <Dropdown.Toggle
          variant=''
          id="dropdown-basic"
          className="fw-light"
          size='lg'
        >
          Categorías
        </Dropdown.Toggle>

        <Dropdown.Menu variant=''>
          {items.map( (item) => {
            return(
              <Dropdown.Item 
                key={item.id} 
                onClick={(e)=>{e.preventDefault; router.push('/tienda')}} 
                className="fw-light"
                
                >
                {item.categoria}
              </Dropdown.Item>
            )
          })}
          

        </Dropdown.Menu>
      </Dropdown>
    </Col>
  )
}

export default DropdownNav