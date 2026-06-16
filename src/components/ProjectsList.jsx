export default function ProjectsList({ projectsList }) {
  return (
    <aside className="bg-stone-800 text-stone-200 px-9 py-14 rounded-r-xl">
      <h2 className="text-2xl font-semibold mb-10 uppercase">Your projects</h2>

      <button className="bg-emerald-700 hover:bg-emerald-800 transition-colors duration-150 text-stone-200 md:text-sm lg:text-xl mb-8 px-4 py-2 rounded-md">
        + Add Project
      </button>
      <ul className="text-stone-200 text-xl flex flex-col gap-1">
        {projectsList.length > 0 &&
          projectsList.map((project) => (
            <li>
              <button>{project.title}</button>
            </li>
          ))}
      </ul>
    </aside>
  );
}
