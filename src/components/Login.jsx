import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    const {setuser} = useContext(UserContext)

    // 
    const handleSubmit = (e) =>{
        e.preventDefault()
        setuser({username, password})
    }
  return (                
    <div>
      <h2  style={{ textAlign:"center"}}>Please Login</h2>
      <input type='text'
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      placeholder='username' 
      style={{margin:"10px",marginLeft:"580px",}}/>
      <br />
      <input type='text'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder='password' 
       style={{margin:"10px", marginLeft:"580px"}}
      />
      <br />
      <button onClick={handleSubmit}  style={{margin:"10px", marginLeft:"640px"}}>Submit</button>
    </div>
  )
}

export default Login
