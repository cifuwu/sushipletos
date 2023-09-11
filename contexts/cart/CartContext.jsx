import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState( () => {
    try{
      const item = window.localStorage.getItem('carrito');
      return item ? JSON.parse(item) : {cont: 0, total: 0, elecciones:[]} 
    }
    catch (error){
      return {cont: 0, total: 0, elecciones:[]} 
    }
  });

  const value = [
    cart, 
    (value) => {
      setCart(value);
      try{
        window.localStorage.setItem('carrito', JSON.stringify(value));
      }
      catch (error){
        console.log(error);
      }
    }
  ]

  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}

