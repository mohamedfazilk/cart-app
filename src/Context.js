import React,{useState,useContext,
    useReducer,useEffect} from 'react';

 import Cartitems from './data';
 import reducer from './reducer';
 
 
 const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const initialState = {
  loading:false,
  cart   : Cartitems,
  total : 0,
  amount :0,
}


const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <AppContext.Provider
      value={{
        ...state
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