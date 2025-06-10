import { revalidatePath } from "next/cache";
// get users

export default async function MockUsers() {
  const res = await fetch("https://684877adec44b9f34941003e.mockapi.io/users");
  const users = await res.json();

  // server action to post
  async function createUser(formData) {
    "use server";
    const name = await formData.get("name");
    console.log(name);
    try {
      const response = await fetch(
        "https://684877adec44b9f34941003e.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );

      const newUser = await response.json();
      console.log(newUser.name);

      revalidatePath("/mock-users")

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <form action={createUser}>
        <input type="text" name="name" required className="input" placeholder="name..."/>
        <button type="submit">Add User</button>
      </form>
      <div className="mock-users">
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}
