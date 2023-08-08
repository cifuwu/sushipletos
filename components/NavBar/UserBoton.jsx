import React from 'react'
import {FaUserLarge} from "react-icons/fa6";

function UserBoton() {
  return (
    <boton className='btn btn-lg'>
      <FaUserLarge className='img-fluid' style={{width: '1.5rem', height: '1.5rem'}}/>
    </boton>
  )
}

export default UserBoton