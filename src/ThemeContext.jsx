import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
   const [themeName, setThemename] = useState("Light");
   const [themeColor, setThemeColor] = useState();

   const changeName = () => {
    const newTheme = themeName === "Light" ? "Dark" : "Light";
     setThemename(newTheme);
   };

   const toggelColor = () => {
     const newColor = themeColor === "Dark" ? "Light" : "Dark";
     setThemeColor(newColor);
   };

   return (
     <ThemeContext.Provider value={{ themeName, themeColor, changeName, toggelColor }}>
       {children}
     </ThemeContext.Provider>
   );
};

export default ThemeContext;