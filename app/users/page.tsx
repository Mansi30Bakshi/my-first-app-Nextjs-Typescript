export const instant = false;
export default async function UsersPage(){
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await res.json();
   console.log("Users Fetched : ",users.length);


  return(
    <div className="min-h-screen p-8 bg-slate-100">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <ul className="space-y-2">
        {users.map((users : {id : number;name:string;email:string}) => (
          <li key={users.id} className="p-4 bg-white rounded-lg shadow">
          <p className="font-bold">{users.name}</p>
          <p className="text-slate-600 text-sm">{users.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}