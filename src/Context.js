import React,{useState,useContext,
    useReducer,useEffect} from 'react';

 import CartItems from './data';
 
 
 const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()


const Context = () => {
  return (
    <div>Context</div>
  )
}

export default Context