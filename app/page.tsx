"use client"
 import { useState } from "react"
 import Link from "next/link";

 export default function Home(){
     const[message,setMessage] = useState("Hello Mansi");
  return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 gap-4">
    <h1 className="text-4xl font-bold text-slate-800">{message}</h1>
    <button onClick = {() => {setMessage("Button Clicked!")}}className="px-4 py-2 bg-blue-500 text-amber-50 rounded-3xl">Click Me!</button>
    <button onClick={() => {setMessage("Hello,Mansi")}} className="px-4 py-2 bg-blue-500 text-amber-50 rounded-3xl">Click for Revert</button>
  
    <Link href="/About" className="px-4 py-2 bg-green-500
    text-white rounded-lg">Go to About</Link>
    <Link href="/Contact" className="px-4 py-2 bg-green-500
    text-white rounded-lg">Go to Contact</Link>
    </div>
  )
}