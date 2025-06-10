export default async function UsersFunction() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

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
