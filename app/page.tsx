type User = {
  name:string;
  age:number;
  role:string;
};
export default function Home(){
  const user : User = {
    name : "Mansi",
    age:22,
    role:"Developer"
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">
        Hello {user.name} 👋
      </h1>
      <p className="mt-4 text-xl">
        Age: {user.age} | Role: {user.role}
      </p>
    </main>
  );
  }