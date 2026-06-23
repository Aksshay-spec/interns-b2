import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://dummyjson.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const [editId, setEditId] = useState(null);

  // ==========================
  // GET USERS
  // ==========================
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(API_URL);

      setUsers(response.data.users);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ==========================
  // INPUT CHANGE
  // ==========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // CREATE USER
  // ==========================
  const addUser = async () => {
    if (!formData.firstName || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/add`,
        {
          firstName: formData.firstName,
          email: formData.email,
        }
      );

      setUsers([...users, response.data]);

      setFormData({
        firstName: "",
        email: "",
      });
    } catch (error) {
      console.error("Add Error:", error);
    }
  };

  // ==========================
  // SELECT USER FOR EDIT
  // ==========================
  const editUser = (user) => {
    setEditId(user.id);

    setFormData({
      firstName: user.firstName,
      email: user.email,
    });
  };

  // ==========================
  // UPDATE USER
  // ==========================
  const updateUser = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/${editId}`,
        {
          firstName: formData.firstName,
          email: formData.email,
        }
      );

      const updatedUsers = users.map((user) =>
        user.id === editId
          ? {
              ...user,
              ...response.data,
            }
          : user
      );

      setUsers(updatedUsers);

      setEditId(null);

      setFormData({
        firstName: "",
        email: "",
      });
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  // ==========================
  // DELETE USER
  // ==========================
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`);

      setUsers(
        users.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <h1>React CRUD with Axios</h1>

      {/* FORM */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {editId ? (
          <button onClick={updateUser}>
            Update User
          </button>
        ) : (
          <button onClick={addUser}>
            Add User
          </button>
        )}
      </div>

      {/* USER LIST */}

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <table
          border="1"
          cellPadding="10"
          width="100%"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>{user.firstName}</td>

                <td>{user.email}</td>

                <td>
                  <button
                    onClick={() =>
                      editUser(user)
                    }
                  >
                    Edit
                  </button>

                  <button
                    style={{
                      marginLeft: "10px",
                    }}
                    onClick={() =>
                      deleteUser(user.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;