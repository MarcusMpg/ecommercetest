export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gris-cols-4 lg:grid-cols-4 gap-10 xl:gap-6">
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col gap-4">
          Product 1
        </div>
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col gap-4">
          Product 2
        </div>
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col gap-4">
          Product 3
        </div>
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col gap-4">
          Product 4
        </div>
      </div>
    </div>
  );
}
