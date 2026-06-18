import { Children, createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
  const [darkMode, setdarkMode] = useState(false);

  const toggleTheme = () =>setdarkMode(!darkMode);
  return(
    <ThemeContext.Provider value={{darkMode, toggleTheme}}>
          {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);