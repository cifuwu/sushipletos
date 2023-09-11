import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../contexts/user/UserContext";
import { useRut } from "@/hooks/react-rut-formatter/dist";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";




function DatosPersonales() {
  const router = useRouter();
  const [cargandoBoton, setCargandoBoton] = useState(false); 

  const [user, setUser] = useContext(UserContext);

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  //const [rut, updateRut] = useState("");
  const [correo, setCorreo] = useState("");


  const { rut, updateRut, isValid } = useRut();

  const postPedidoAux = async (data)=>{

    router.push("/checkout/step-2");
  }

  const submit = (e) => {
    e.preventDefault();
    setCargandoBoton(true);

    const datos = {
      usuario:{
        nombres: e.target.nombre.value,
        apellidos: e.target.apellidos.value,
        telefono: e.target.phone.value,
        rut: e.target.rut.value,
        correo: e.target.email.value
      }
    };

    setUser(datos);
    postPedidoAux(datos);
  };

  useEffect(() => {
    setCargandoBoton(false);
    if (user.length === 0) {
      return;
    }
    setNombre(user.nombre);
    setApellidos(user.apellidos);
    setTelefono(user.telefono);
    updateRut(user.rut);
    setCorreo(user.correo);
  }, []);

  return (
    <form onSubmit={submit}>
      <Row style={{ marginTop: "10px" }}>
        <Col xs={6}>
          <Form.Group controlId="nombre">
            {/* <Form.Label>Nombre</Form.Label> */}
            <TextField
              required
              id="nombre"
              name="nombre"
              type={"text"}
              fullWidth
              label="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              variant="outlined"
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group>
            {/* <Form.Label>Apellidos</Form.Label> */}
            <TextField
              required
              id="apellidos"
              name="apellidos"
              type={"text"}
              fullWidth
              label="Apellidos"
              onChange={(e) => setApellidos(e.target.value)}
              value={apellidos}
              variant="outlined"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col xs={6}>
          <Form.Group>
            {/* <Form.Label>Teléfono</Form.Label> */}
            <TextField
              required
              id="felefono"
              name="phone"
              type={"tel"}
              fullWidth
              label="Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
              variant="outlined"
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group>
            {/* <Form.Label>Rut</Form.Label> */}
            <TextField
              required
              id="rut"
              name="rut"
              type={"text"}
              fullWidth
              label="Rut"
              onChange={(e) => updateRut(e.target.value)}
              //value={rut}
              value={rut.formatted}
              variant="outlined"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col xs={12}>
          <Form.Group>
            {/* <Form.Label>Correo</Form.Label> */}
            <TextField
              required
              id="email"
              name="email"
              type={"email"}
              fullWidth
              label="Correo"
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
              variant="outlined"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end" style={{ marginTop: "20px" }}>
        {/* <Col xs='auto'style={{marginLeft: '10px'}}>
                    <Button className="btn btn-primary btn-lg" type="button" >Ver carrito</Button>
                </Col> */}
        <Col xs="auto" style={{ marginRight: "10px" }}>
          {!cargandoBoton? 
          <Button className="btn btn-success btn-lg" type="submit">
            Continuar
          </Button>
          :
          <Button variant="success" size="lg" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />{" "}
            Un momentito 🙏🏽
          </Button>
          }
        </Col>
      </Row>
    </form>
  );
}

export default DatosPersonales;
