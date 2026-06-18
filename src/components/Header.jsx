import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <header
      style={{
        padding: "15px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Header</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;