import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import useResolucion from "../hooks/useResolucion";
import Filaproductos from "@/components/Filaproductos";
import Image from "next/image";
import { productos, headerTienda } from "@/helpers/data";

function TiendaPage() {
    const { width, height } = useResolucion();
    const [ancho, setAncho] = useState(450);
    const [largo, setLargo] = useState(120);

    const [imagen, setImagen] = useState();

    useEffect(() => {
        //console.log(width);
        if (width > 950) {
            setImagen(headerTienda?.grande);
            setAncho(3600);
            setLargo(500);
        } else if (width >= 550) {
            setImagen(headerTienda?.mediano);
            setAncho(1000);
            setLargo(200);
        } else if (width < 550) {
            setImagen(headerTienda?.chico);
            setAncho(450);
            setLargo(120);
        }
    }, [width]);

    useEffect(() => {
        if (width > 950) {
            setImagen(headerTienda?.grande);
            setAncho(3600);
            setLargo(500);
        } else if (width >= 550) {
            setImagen(headerTienda?.mediano);
            setAncho(1000);
            setLargo(200);
        } else if (width < 550) {
            setImagen(headerTienda?.chico);
            setAncho(450);
            setLargo(120);
        }
    }, [headerTienda]);

    return (
        <>
            <Head>
                <title>Tienda | CifuMakers</title>
                <meta name="description" content="Todos los Productos de CifuMakers" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            <Container>
              <Row
                className="justify-content-center"
                style={{ marginTop: "35px", marginBotton: "25px" }}
              >
                <Col xs={12} className="text-center">
                  {imagen ? (
                    <Image
                      src={imagen}
                      alt="sushi"
                      width={ancho}
                      height={largo}
                      priority
                      quality={ancho==3600? 10 : 75}
                      className="rounded img-fluid imagen-noarrastrable"
                      placeholder="blur"
                      blurDataURL={headerTienda.blur}
                    />
                  ) : null}
                </Col>
              </Row>

                <Filaproductos productos={productos} />

                <div style={{ marginTop: "100px" }}></div>
                <div style={{ marginTop: "100px" }}></div>
            </Container>
        </>
    );
}

export default TiendaPage;

