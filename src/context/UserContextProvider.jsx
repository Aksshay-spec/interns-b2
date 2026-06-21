import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setuser] = React.useState(null);
    const [theme, settheme] = useState("light");
    const isAuthenticated = () =>{
        if(user!=null) return true;
        else return false
    }

    const logout = () =>{
        setuser(null);
    }

    const toggleTheme = () =>{
        settheme((prev)=>(prev == "light" ? "dark" : "light"))
    };
    return(
        // { children } is a special React prop that represents whatever components are wrapped inside this provider.
        <UserContext.Provider value={{user, setuser, isAuthenticated, theme, logout, toggleTheme}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider