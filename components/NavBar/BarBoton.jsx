import React from 'react'
import {FaBars} from "react-icons/fa6";

function BarBoton() {
  return (
    <button className='btn btn-lg'>
      <FaBars className='img-fluid' style={{width: '1.5rem', height: '1.5rem'}}/>
    </button>
  )
}

export default BarBoton