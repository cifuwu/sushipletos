import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';


const fecha = (fecha) => {
    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const caca = new Date(fecha);
    const numeroDia = caca.getDay();
    const numero = caca.getDate();
    const mes = caca.getMonth();
    const nombreMes = meses[mes];
    const nombreDia = dias[numeroDia];
    return nombreDia + " " + numero + " de " + nombreMes;
  };


function FechaEnvio({idProducto}) {
  const[fecha_envio, setFecha_envio] = useState();

  const obtenerTiempo = async()=>{
    const resp = {}
    setFecha_envio(resp.fecha_envio);
  } 

  useEffect(()=>{
    obtenerTiempo();
  },[])

  return (
    <>
      <hr />
      <Row className="align-items-start justify-content-start">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={8}
          xxl={8}
          style={{ marginBottom: "10px" }}
        >
          <Card className="bg-secondary-subtle">
            <Card.Body>
              <Row className="justify-content-start align-items-center">
                <Col xs="12">
                  <p
                    className="fs-6 fw-normal text-dark text-center"
                    style={{ marginTop: "6px" }}
                  >
                    Fecha estimada de envío:
                  </p>
                </Col>
                <Col xs="12">
                  {fecha_envio?
                  <>
                    <h6 className='text-success text-center'>{fecha(fecha_envio)}</h6>
                    <p
                      className="fs-6 fw-normal text-dark text-center"
                      style={{ marginTop: "15px" }}
                    >
                      (Fecha en la que se entregaría el pedido al courier)
                    </p>
                  </>
                  :
                  <h6>Cargando...</h6>
                  }
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row> 
    </> 
  )
}

export default FechaEnvio