import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { theme } = useAppContext();

  return (
    <aside
      style={{
        width: "200px",
        padding: "20px",
        background: theme === "light" ? "#f4f4f4" : "#555",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Sidebar</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
};

export default Sidebar;