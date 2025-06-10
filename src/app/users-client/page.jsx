"use client";
import { useState, useEffect } from "react";

export default function UserClient() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Couldn't fetch users");
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        if (error instanceof Error)
          setError(`Something failed! ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <ul className="list">
      {users.map((user) => (
        <li key={user.id}>
          <h1>User: {user.name}</h1>
          <h2>Email: {user.email}</h2>
          <h2>Phone: {user.phone}</h2>
        </li>
      ))}
    </ul>
  );
}
