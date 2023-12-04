import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Carrusel from "../components/home/Carrusel";
import FilaCategorias from '@/components/home/FilaCategorias';
import FilaProductosHome from '@/components/home/FilaProductosHome';


import { carrousel } from '@/helpers/data';



export default function Home({productos}) {


  return (
    <>
      <Head>
        <title>Suhsipletos</title>
        <meta name="description" content="Tiendita de sushi rico rico rico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <div className="">
        <Carrusel imagenes={carrousel}/>
       
        <Container style={{marginTop: '50px'}}> 

        <Row style={{marginTop: '75px'}}>
          <Col>
            <h1 className="fw-normal"> Productos destacados </h1>
            <p> Mira los productos que más te recomendamos </p>
          </Col>
        </Row>

        <FilaProductosHome productos={productos}/>

      </Container>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const resp = await fetch("http://localhost:8090/graphql",
    {
    headers: {'Content-Type' : 'application/json'},
    method: 'post',
    body: JSON.stringify(
      {query: `query AllProductos {
        allProductos {
          descripccion
          id
          fotos {
            id
            url
          }
          nombre
          precio
          categoria
        }
      }` })})
  .then(result => result.json())
  .catch(err => console.log(err))

  console.log(resp.data)
  const productos = resp.data.allProductos
  return { props: { productos } }
}

