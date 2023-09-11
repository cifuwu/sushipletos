import { getImagenesHomeUrl } from "@/helpers/URL";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import styles from "../../styles/FilaCategorias.module.css";

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function FilaCategorias({ imagenes, funcion = () => {} }) {
    const router = useRouter();

    return (
        <Row className="gy-3">
            {imagenes?.map((imagen) => {
                return (
                    <Col
                        xs={6}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={3}
                        xxl={3}
                        key={imagen.id}
                    >
                        <Link href={imagen.url}>
                            <Image
                                className={`${styles.xd} rounded img-fluid imagen-noarrastrable`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    funcion();
                                    router.push(imagen.url);
                                }}
                                placeholder="blur"
                                blurDataURL={imagen.blur}
                                width={300}
                                height={300}
                                alt={imagen.titulo}
                                src={imagen.imagen}
                            />
                        </Link>
                    </Col>
                );
            })}
        </Row>
    );
}

export default FilaCategorias;
