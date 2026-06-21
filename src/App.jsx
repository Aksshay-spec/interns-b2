import { useContext } from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
// import UserContextProvider from "./context/UserContextProvider"
import UserContext from "./context/UserContext"

function App() {

const {isAuthenticated} = useContext(UserContext)
  return (
  <div>
     <h1>Context API in React</h1>
  {
    isAuthenticated() ? <Profile/>:<Login/>
  
  }
  </div>
  
 
  )
}

export default App
