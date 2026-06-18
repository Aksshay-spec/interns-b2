import { useAppContext } from "../context/AppContext";

const Content = () => {
  const { theme } = useAppContext();

  return (
    <main
      style={{
        flex: 1,
        padding: "20px",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Content Area</h2>
      <p>
        Current Theme: <strong>{theme}</strong>
      </p>
    </main>
  );
};

export default Content;