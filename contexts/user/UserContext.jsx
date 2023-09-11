import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState( () => {
    try{
      const item = window.sessionStorage.getItem('user');
      return item ? JSON.parse(item) : [] 
    }
    catch (error){
      return []
    }
  });

  const value = [
    user, 
    (value) => {
      setUser(value);
      try{
        window.sessionStorage.setItem('user', JSON.stringify(value));
      }
      catch (error){
        console.log(error);
      }
    }
  ]

  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}
