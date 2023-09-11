import Link from 'next/link'
import React from 'react'
import { Button, Col } from 'react-bootstrap'

function Boton({link, texto}) {
  return (
    <Col xs="auto" className="d-none d-md-block ">
      <Link href={link}>
        <Button
          variant=""
          style={{color: "black"}}
          className="fw-light"
          size='lg'
        >
          {texto}
        </Button>
      </Link>
    </Col>
  )
}

export default Boton