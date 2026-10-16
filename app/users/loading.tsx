// export default function Loading(){
//    return(
//        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 gap-4">
//          <div className="w-12 h-12 border-4 border-slate-300 border-t-blue-500 rounded-full animate-spin"></div>
//         <p className="text-xl text-slate-600">Loading Users...</p>
//        </div>
//    )
// }
// app/users/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen p-8 bg-slate-100">
      <div className="h-9 w-32 bg-slate-300 rounded animate-pulse mb-6"></div>
      <ul className="space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i} className="p-4 bg-white rounded-lg shadow">
            <div className="h-5 w-40 bg-slate-300 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-56 bg-slate-200 rounded animate-pulse"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}