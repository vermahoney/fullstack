import { useState, useEffect } from "react";
import UserCard from "./component/UserCard";


function App() {
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

  const [users, setUsers] = useState([ ]);

 useEffect(() => {
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);


  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

const handleAddUser = () => {
  if (!name || !email || !phone) {
    alert("Please fill all fields");
    return;
  }

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    phone: phone,
  };

  setUsers([...users, newUser]);

  setName("");
  setEmail("");
  setPhone("");
};

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div>
      <h1>User Management System</h1>

      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>You are searching for: {search}</p>

      <div>
        <h2>Add User</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={handleAddUser}>Add User</button>
      </div>

     <div>
  {loading && <p>Loading users...</p>}

  {error && <p>{error}</p>}

  {!loading &&
    !error &&
    filteredUsers.map((user) => (
      <UserCard
        key={user.id}
        user={user}
        onDelete={handleDelete}
      />
    ))}
</div>
    </div>
  );
}

export default App;