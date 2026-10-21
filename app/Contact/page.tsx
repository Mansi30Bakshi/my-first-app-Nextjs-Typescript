"use client";
import { useState } from "react";

export default function ContactPage(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const handleSubmit = (e:React.FormEvent) => {
       e.preventDefault();
       console.log("Form Submitted",{name,email});
       alert(`Thank you ${name}!`);
       setName("");
       setEmail("");
  }
  return(
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-8 rounded-xl shadow-md w-full max-w-md flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold text-slate-800 text-center mb-2">Contact Us</h1>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          className="border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
      >
        Submit
      </button>
    </form>
  </div>
  );
}

