import React,{useState,useContext,createContext} from 'react';
import * as api from '../APIs'

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
  const [something,setSomething] = useState();
  // more functions

  return(
    <StateContext.Provider value={{something,setSomething}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
