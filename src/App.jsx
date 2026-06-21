import { useContext } from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
// import UserContextProvider from "./context/UserContextProvider"
import UserContext from "./context/UserContext"

function App() {

const {isAuthenticated} = useContext(UserContext)
const {theme, toggleTheme} = useContext(UserContext)
  return (
  <div  style={{
        padding: "15px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}>
     <h1>Context API in React</h1>
     <button onClick={toggleTheme}>
       {theme === "light" ? "Dark" : "Light"} Mode
      </button>
  {
    isAuthenticated() ? <Profile/>:<Login/>
  
  }
  </div>
  
 
  )
}

export default App
