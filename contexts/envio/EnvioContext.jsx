import React, { createContext, useState } from 'react'

export const EnvioContext = createContext();

export const EnvioProvider = ({ children }) => {
    const valorInicial = {
        metodo: null,
        costo: null,
        region: '',
        courier: null,
        regionId: '',
        comunaId: '',
        depto: '',
        comuna: '',
        direccion: '',
        numeroDireccion: '',
        comentarios: '',
        set: false
    }

  const [envio, setEnvio] = useState( () => {
    try{
      const item = window.sessionStorage.getItem('envio');
      return item ? JSON.parse(item) : valorInicial
    }
    catch (error){
      return valorInicial
    }
  });

  const value = [
    envio, 
    (value) => {
      setEnvio(value);
      try{
        window.sessionStorage.setItem('envio', JSON.stringify(value));
      }
      catch (error){
        console.log(error);
      }
    }
  ]

  return (
    <EnvioContext.Provider value={value}>
        {children}
    </EnvioContext.Provider>
  )
}
