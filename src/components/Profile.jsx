import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user, logout} = useContext(UserContext)
   
    return (
        <div>
            <h3>Welcome {user.username}</h3>
            <button onClick={logout}>Logout</button>
        </div>
        
    )
}

export default Profile
