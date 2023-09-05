import Link from 'next/link'
import React from 'react'

function BotonNav({texto, url='/'}) {
  return (
    <div className='col-auto'>
      <Link href={url}>
        <button className='btn btn-lg'>
          {texto}
        </button>
      </Link>
    </div>
  )
}

export default BotonNav