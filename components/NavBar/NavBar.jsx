import React from 'react'
import logo from '../../public/SUSHIPLETOS_2.png'
import Image from 'next/image'
import BotonNav from './BotonNav'
import CartBoton from './CartBoton'
import UserBoton from './UserBoton'
import BarBoton from './BarBoton'

function NavBar() {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-between align-items-center'>
        <div className='col-4 col-md-4'>
          <div className='d-md-none'>
            <BarBoton/>
          </div>
        </div>
        <div className='col-3 col-md-4 text-center'>
          <Image className='img-fluid' width={100} height={100} src={logo}/>
        </div>
        <div className='col-5 col-md-4 text-end'>
          <UserBoton />
          <CartBoton />
        </div>
      </div>
      <div className='d-none d-md-block'>
        <div className='row justify-content-center' style={{marginTop: 5}}>
          <BotonNav texto='Inicio' url='/'/>
          <BotonNav texto='Catalogo' url='Catalogo'/>
          <BotonNav texto='Biblioteca' url='Biblioteca'/>
          <BotonNav texto='Información' url='Informacion'/>
          <BotonNav texto='Sobre Nosotros' url='SobreNosotros'/>
        </div>
      </div>

      <hr style={{margin: 0, padding: 0, marginTop: 5}} />

    </div>
  )
}

export default NavBar