import ProjectsList from "./components/ProjectsList.jsx";
import NoProjectsPlaceholder from "./components/NoProjectsPlaceholder.jsx";
import CreateProjectForm from "./components/CreateProjectForm.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

import { useState } from "react";

function App() {
  const [currentComponent, setCurrentComponent] = useState("placeholder");
  const [projectsList, updateProjectsList] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-stone-200 grid grid-cols-[1fr_3fr] min-h-[90vh]">
        <ProjectsList
          setCurrentComponent={setCurrentComponent}
          projectsList={projectsList}
          setSelectedId={setSelectedId}
        />
        {/* <CreateProjectForm
          projectsList={projectsList}
          updateProjectsList={updateProjectsList}
          setCurrentComponent={setCurrentComponent}
        /> */}
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
              setCurrentComponent={setCurrentComponent}
            />
          )}
          {currentComponent === "projectDetails" && selectedId && (
            <ProjectDetails
              projectsList={projectsList}
              selectedId={selectedId}
              updateProjectsList={updateProjectsList}
              setCurrentComponent={setCurrentComponent}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
