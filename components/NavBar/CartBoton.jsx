import React from 'react'
import {FaCartShopping} from "react-icons/fa6";

function CartBoton() {
  return (
    <button className='btn btn-lg'>
      <FaCartShopping className='img-fluid' style={{width: '1.5rem', height: '1.5rem'}}/>
    </button>
  )
}

export default CartBoton