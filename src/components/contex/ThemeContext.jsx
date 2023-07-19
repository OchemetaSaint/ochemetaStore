import React, { createContext } from 'react';
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const {user} = useSelector((state)=> state.persisitedReducer)
    console.log(user)


  return (
    <ThemeContext.Provider value={{user}}>
      {children}
    </ThemeContext.Provider>
  );
};
