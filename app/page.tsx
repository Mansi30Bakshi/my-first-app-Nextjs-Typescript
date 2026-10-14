"use client"
import Card from "@/Components/Card"


const skills = [
  { title: "React", description: "UI banane ki library" },
  { title: "Next.js", description: "React ka framework, routing + SSR ke saath" },
  { title: "TypeScript", description: "JavaScript with types" },
  { title: "Node.js", description: "Backend runtime" },
  { title: "MongoDB", description: "NoSQL database" },
  { title: "Tailwind", description: "Utility-first CSS" },
];

export default function Home(){
  return(
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {skills.map((skill,index) => (
        <Card key={index} title={skill.title} description={skill.description}/>
      ))}
    </div>
    </div>
  )
}