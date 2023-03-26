import React,{useState,useContext,createContext} from 'react';
import * as api from '../APIs'

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user,setUser] = useState();
  const [newUser,setNewUSer] = useState();

  const login = async(formData) => {
    try {
      const res = await api.login(formData);
      setUser(res);
      
    } catch (error) {
      console.log(error.message);
    }
  }
  const signup = async(formData) => {
    try {
      const res = await api.signup(formData);
      setUser(res);
      
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{login,signup,user,newUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);
