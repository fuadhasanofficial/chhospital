import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("n")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  const updateUserRole = (id, newRole) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: newRole }),
    })
      .then((response) => response.json())
      .then(() => {
        setUsers(
          users.map((user) =>
            user.id === id ? { ...user, role: newRole } : user
          )
        );
      })
      .catch((error) =>
        console.error("There was an error updating the user role!", error)
      );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b">ID</th>
              <th className="py-2 px-3 border-b">Name</th>
              <th className="py-2 px-3 border-b">Role</th>
              <th className="py-2 px-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-3 border-b">{user._id}</td>
                <td className="py-2 px-3 border-b">{user.name}</td>
                <td className="py-2 px-3 border-b">{user.role}</td>
                <td className="py-2 px-3 border-b">
                  <select
                    value={user.role}
                    onChange={(e) => updateUserRole(user._id, e.target.value)}
                    className="px-2 py-1 border rounded"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
