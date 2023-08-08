import React from 'react'

function Tabla() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Libro</th>
          <th scope="col">Prestamo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>libro caca</td>
          <td>Nombre 1</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>poto</td>
          <td>Nombre 2</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>pichí</td>
          <td>Nombre 3</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Tabla