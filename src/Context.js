import React,{useState,useContext,
    useReducer,useEffect} from 'react';

 import Cartitem from './data';
 
 
 const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(Cartitem)

  return (
    <AppContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }