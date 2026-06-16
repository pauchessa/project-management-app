import ProjectsList from "./components/ProjectsList.jsx";
import NoProjectsPlaceholder from "./components/NoProjectsPlaceholder.jsx";
import CreateProjectForm from "./components/CreateProjectForm.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

import { useState } from "react";

function App() {
  const [currentComponent, setCurrentComponent] = useState("placeholder");
  const [projectsList, updateProjectsList] = useState([]);
  console.log(projectsList);
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-[1fr_3fr] min-h-screen">
        <ProjectsList
          setCurrentComponent={setCurrentComponent}
          projectsList={projectsList}
        />
        <main className="bg-stone-200">
          {currentComponent === "placeholder" && (
            <NoProjectsPlaceholder
              setCurrentComponent={setCurrentComponent}
            ></NoProjectsPlaceholder>
          )}
          {currentComponent === "createProject" && (
            <CreateProjectForm
              projectsList={projectsList}
              updateProjectsList={updateProjectsList}
            />
          )}
          {currentComponent === "projectDetails" && <ProjectDetails />}
        </main>
      </div>
    </div>
  );
}

export default App;
