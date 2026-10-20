import Link from "next/link";

export const instant = false;

export default async function UsersPage() {
  // 1. URL sahi kiya (users)
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  
  console.log("Users Fetched : ", users.length);

  return (
    <div className="min-h-screen p-8 bg-slate-100">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <ul className="space-y-2">
        {users.map((user: { id: number; name: string; email: string }) => (
          // 2. Link mein users.id ki jagah user.id kiya (kyunki map ke andar single item 'user' hai)
          <Link href={`/users/${user.id}`} key={user.id}>
            <li className="p-4 bg-white rounded-lg shadow">
              <p className="font-bold">{user.name}</p>
              <p className="text-slate-600 text-sm">{user.email}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}