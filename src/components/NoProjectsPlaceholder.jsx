import logo from "./../../public/logo.png";
export default function NoProjectsPlaceholder() {
  return (
    <div className="flex flex-col items-center mt-20 gap-8">
      <img src={logo} className="w-20 h-20"></img>
      <h3 className="text-stone-600 text-xl font-bold">No Project Selected</h3>
      <p className="text-stone-500 text-md">
        Select a project or get started with a new one
      </p>
      <button className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-150 text-stone-100 md:text-md lg:text-xl mb-8 px-4 py-2 rounded-md">
        Create new project
      </button>
    </div>
  );
}
