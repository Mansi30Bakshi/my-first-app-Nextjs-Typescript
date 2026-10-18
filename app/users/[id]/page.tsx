export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen p-8 bg-slate-100">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <p className="text-lg text-slate-700">
        Tumne URL mein ID daali hai: <span className="font-bold text-blue-600">{id}</span>
      </p>
    </div>
  );
}