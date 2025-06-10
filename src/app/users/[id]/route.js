const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
];

export async function GET(_request, { params }) {
  const { id } = await params;
  console.log("Fetching user with ID:", id);
  // Simulate fetching user data from a database or an API

  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(JSON.stringify(user), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// find a new user and update name

export async function PUT(request, { params }) {
  let { id } = await params;
  id = parseInt(id);

  const { name } = await request.json();

  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  users[index] = { ...users[index], name }; // update the array

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// delete user
export async function DELETE(request, { params }) {
  let { id } = await params;
  id = parseInt(id);

  // find user
  let i = users.findIndex((user) => user.id === id);

  let deletedUser = users.splice(i, 1);

  return new Response(JSON.stringify([...users, { ...deletedUser }]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
