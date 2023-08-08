import React from 'react'

function BotonNav({texto}) {
  return (
    <div className='col-auto'>
      <button className='btn btn-lg'>
        {texto}
      </button>
    </div>
  )
}

export default BotonNav