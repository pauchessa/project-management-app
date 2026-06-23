import { useState } from "react";

export default function CreateProjectForm({
  projectsList,
  updateProjectsList,
  setCurrentComponent,
}) {
  let pClasses = "flex flex-col gap-1";
  let labelClasses = "text-stone-500 text-sm font-semibold uppercase";
  let inputClasses =
    "text-stone-700 text-base px-3 py-2 bg-stone-50 rounded-md border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-colors caret-stone-700 ";
  const initialState = { title: "", description: "", date: "", tasks: [] };

  const [project, updateProject] = useState(initialState);

  function saveProject(project) {
    const id = Math.random().toString(36).slice(2);
    updateProjectsList((list) => ({ ...list, [id]: project }));
    updateProject(initialState);
  }

  function handleCancel() {
    setCurrentComponent("placeholder");
  }

  function handleInput(e) {
    updateProject((prevProject) => {
      const updatedProject = {
        ...prevProject,
        [e.target.name]: e.target.value,
      };

      return updatedProject;
    });
  }

  return (
    <div>
      <form>
        <div className="flex flex-col gap-8 px-8 py-14">
          <p className={pClasses}>
            <label className={labelClasses}>Title</label>
            <input
              name="title"
              value={project.title}
              onChange={handleInput}
              type="text"
              className={`${inputClasses} h-full`}
            ></input>
          </p>
          <p className={pClasses}>
            <label className={labelClasses}>Description</label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleInput}
              className={`${inputClasses} h-12`}
            ></textarea>
          </p>
          <div className={`${pClasses}`}>
            <label className={labelClasses}>Due date</label>
            <div className="relative">
              <input
                name="date"
                value={project.date}
                onChange={handleInput}
                className={`${inputClasses} h-full w-full pr-8`}
              ></input>
              <button
                className="text-stone-700 pt-1 absolute top-1/2 right-3 -translate-y-1/2"
                type="button"
              >
                <ion-icon name="calendar-clear-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 px-8">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-stone-200
 border-2 border-emerald-500
text-emerald-600
hover:bg-emerald-600
hover:border-transparent
hover:text-stone-100
transition-colors 
md:text-base lg:text-xl
mb-8 px-4 py-2 rounded-md w-24"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              saveProject(project);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-150 text-stone-100 md:text-base lg:text-xl mb-8 px-4 py-2 rounded-md w-24"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
