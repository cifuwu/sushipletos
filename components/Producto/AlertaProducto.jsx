import { useRouter } from 'next/router';
import React from 'react'
import { Alert, Button } from 'react-bootstrap';

function AlertaProducto({show, setShow}) {
  const router = useRouter();

  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>¡Agregado al carrito! 🙌</Alert.Heading>
      <Button
        variant="outline-primary"
        style={{ marginTop: "10px", marginRight: "5px" }}
        onClick={(e) => {
          e.preventDefault;
          router.push("/carrito");
        }}
      >
        {" "}
        Ver carrito{" "}
      </Button>
      <Button
        variant="outline-success"
        style={{ marginTop: "10px" }}
        onClick={(e) => {
          e.preventDefault;
          router.push("/checkout/step-1");
        }}
      >
        {" "}
        Ir a pagar{" "}
      </Button>
    </Alert>
  )
}

export default AlertaProducto