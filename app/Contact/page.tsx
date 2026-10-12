import Link from "next/link"

export default function Contact(){
  return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 gap-4">
      <h1 className="text-4xl font-bold text-slate-800">Contact Page</h1>
      <Link href="/"className="px-4 py-2 bg-green-500
    text-white rounded-lg">Home</Link>
    </div>
  )
}