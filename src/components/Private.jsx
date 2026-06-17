import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Private = () => {
    const {user,logout} = useContext(AuthContext)
    return (
        <div className="login-container">
            <div className="login-form">
        <h3>Welcome</h3>
        <h2>Hiii {user}</h2>
        <button className="login-btn" onClick={logout}>Logout</button>
       </div> 
        </div>
       
    );
}

export default Private;