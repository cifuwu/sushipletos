import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CartContext } from "../../contexts/cart/CartContext";
import { getTotal } from "../../functions/CarritoFunciones";
import ProductoCarritoOffCanvas from "./ProductoCarritoOffCanvas";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';






function CarritoOffCanvas({ abrir, cerrar, estado }) {
    const router = useRouter();
    const [carrito, setCarrito] = useContext(CartContext);
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);


    useEffect(()=>{
        setTotal(carrito.total)
        setCart(carrito.elecciones)
    },[carrito])


    return (
        <>
            <Offcanvas show={estado} onHide={cerrar} placement="end" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <hr></hr>
                <Offcanvas.Body className="position-sticky">
                    <Col style={{minHeight: '700px' , marginBottom: '30px'}}>
                        {cart?.map((item) => {
                            return(
                                <ProductoCarritoOffCanvas cerrar={cerrar} item={item} key={item.id} />
                            )
                        })}

                    </Col>    

                    <Col className="sticky-bottom align-bottom" style={{backgroundColor: 'white' , paddingBottom: '10px'}}>
                        
                        <Row style={{padding: '10px'}}>
                            <hr style={{}}/>
                            <Col>
                                <h4>total:</h4>
                            </Col>
                            <Col
                                    xs={4}
                                    className="d-flex justify-content-end align-items-center"
                                >
                                    <small className="fs-4 text-success d-flex align-items-end justify-content-end align-items-center">
                                        ${total?.toLocaleString("es-CL")}
                                    </small>
                         
                                </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-primary" size="lg" type="button" onClick={(e)=>{e.preventDefault; cerrar(); router.push('/carrito');}}>Ver carrito</Button>
                                </div>
                            </Col>
                            
                            
                            <Col xs={6}>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-success" size="lg" type="button" onClick={(e)=>{e.preventDefault; cerrar(); router.push('/checkout/step-1');}} >Ir a pagar</Button>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                    
                </Offcanvas.Body>
                
            </Offcanvas>
        </>
    );
}

export default CarritoOffCanvas;
