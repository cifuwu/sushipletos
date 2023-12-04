import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";



export default function Home({token}) {


  return (
    <>
      <Head>
        <title>Suhsipletos</title>
        <meta name="description" content="Tiendita de sushi rico rico rico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>




       
      <Container style={{marginTop: '50px'}}> 

      {token ? 
        <Row style={{marginTop: '75px'}}>
          <Col>
           <h2 className='text-center'>Su pedido fue confirmado 🎉</h2>
          </Col>
        </Row>
        :
        <Row style={{marginTop: '75px'}}>
          <Col>
            <h2 className='text-center'>Su pago fue rechazado :(</h2>
          </Col>
        </Row>
      }

        

      </Container>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const token = query.token_ws


  return { props: { token } }
}

