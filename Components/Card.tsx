type CardProps = {
  title: string;
  description:string;
};
export default function Card({title,description}: CardProps){
    return(
      <div className="p-4 bg-white rounded-lg shadow-md border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        <p className="text-slate-600 mt-2">{description}</p>
      </div>
    )
}