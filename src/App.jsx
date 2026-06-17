import React, { useContext } from 'react';
import Login from './components/Login';
import Private from './components/Private';
import './App.css';
import { AuthContext } from './AuthContext';
const App =()=>{
  const {isAuthenticated}=useContext(AuthContext)
  return(
    <>
    
      {isAuthenticated() ? <Private/> : <Login/>}
    </>
  )
}
export default App;