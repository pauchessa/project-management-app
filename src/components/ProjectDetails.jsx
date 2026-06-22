import { useRef } from "react";
const initialState = [];
export default function ProjectDetails({
  selectedId,
  projectsList,
  updateProjectsList,
}) {
  const taskInput = useRef();

  function addTask() {
    if (taskInput.current.value) {
      const task = taskInput.current.value;

      const updatedTasks = [...projectsList[selectedId].tasks, task];

      updateProjectsList((list) => ({
        ...list,
        [selectedId]: {
          ...list[selectedId],
          tasks: updatedTasks,
        },
      }));
    }

    taskInput.current.value = "";
  }

  return (
    <div className="text-stone-700 px-9 py-14">
      <div className="flex justify-between">
        <h3 className="text-4xl font-bold mb-3">
          {projectsList[selectedId].title}
        </h3>
        <button
          className=" rounded-md border-2
    border-stone-300
    text-stone-600
    hover:border-rose-400
    hover:text-rose-600 md:text-sm lg:text-base px-3 py-2 self-center transition-colors"
        >
          Delete
        </button>
      </div>

      <p className="text-stone-500 text-base mb-6">
        {projectsList[selectedId].date}
      </p>
      <p className="text-stone-700 text-lg mb-6">
        {projectsList[selectedId].description}
      </p>
      <hr className="border-stone-300 border-2 mb-6"></hr>
      <h4 className="text-stone-600 text-3xl font-bold mb-4">Tasks</h4>
      <div className="flex flex-col gap-4 mb-4">
        <input
          ref={taskInput}
          className="text-stone-700 text-base px-3 py-2 bg-stone-50 rounded-md border border-stone-300 focus:outline-none   transition-colors caret-stone-700"
          type="text"
        ></input>
        <button
          onClick={addTask}
          className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-150 text-stone-100 md:text-base  px-4 py-2 rounded-md w-fit"
        >
          Add task
        </button>
      </div>

      <ul>
        {projectsList[selectedId].tasks?.map((task, index) => (
          <li
            key={index}
            className="flex justify-between text-stone-700 text-lg "
          >
            <p>{task}</p>
            <button className="text-stone-600 hover:text-rose-600 md:text-sm lg:text-base px-3 py-2 self-center transition-colors">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
