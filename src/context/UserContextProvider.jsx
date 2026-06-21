import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setuser] = React.useState(null);

    const isAuthenticated = () =>{
        if(user!=null) return true;
        else return false
    }

    const logout = () =>{
        setuser(null);
    }
    return(
        // { children } is a special React prop that represents whatever components are wrapped inside this provider.
        <UserContext.Provider value={{user, setuser, isAuthenticated, logout}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider