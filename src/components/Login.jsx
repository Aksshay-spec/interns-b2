import { useContext } from "react";
import { AuthContext } from "../AuthContext";

import {ThemeContext} from "../ThemeContext";


const Login = () => {
   const {username,setUsername,password,setPassword , login} = useContext(AuthContext)
   const {themeName , themeColor , changeName,toggelColor} = useContext(ThemeContext)

    return (
     <div className="login-container">
          <div className="login-form" style={{backgroundColor: themeColor === "Dark" ? "#aaabadbb" : "white", color: themeColor === "Dark" ? "#f5f7ff" : "#111"}}>
           <button className="login-btn" onClick={() => { changeName(); toggelColor(); }}><span>{themeName}</span></button>
            <h1>Login</h1>
            <div className="form-group">
                <label>Username</label>
                <input type="text"
                 placeholder="Enter username"
                 value={username}
                 onChange={(e)=> setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="login-btn" onClick={login}>Login</button>
        </div>
     </div>
    );
}

export default Login;