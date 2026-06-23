import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://dummyjson.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // READ (GET)
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE (POST)
  const addUser = async () => {
    if (!name.trim()) return;

    try {
      const response = await axios.post(`${API_URL}/add`, {
        firstName: name,
      });

      setUsers([...users, response.data]);
      setName("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // UPDATE (PUT)
  const updateUser = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        firstName: "Updated User",
      });

      setUsers(
        users.map((user) =>
          user.id === id ? response.data : user
        )
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // DELETE
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User CRUD App</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={addUser}>
          Add User
        </button>
      </div>

      <hr />

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h4>
            {user.firstName} {user.lastName}
          </h4>

          <p>{user.email}</p>

          <button
            onClick={() => updateUser(user.id)}
          >
            Update
          </button>

          <button
            onClick={() => deleteUser(user.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;