export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return (
    <div className="min-h-screen p-8 bg-slate-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">{user.name}</h1>
        <div className="space-y-2 text-slate-600">
          <p><strong className="text-slate-800">Email:</strong> {user.email}</p>
          <p><strong className="text-slate-800">Phone:</strong> {user.phone}</p>
          <p><strong className="text-slate-800">Website:</strong> {user.website}</p>
        </div>
      </div>
    </div>
  );
}