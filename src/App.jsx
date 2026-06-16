import ProjectsList from "./components/ProjectsList.jsx";
import NoProjectsPlaceholder from "./components/NoProjectsPlaceholder.jsx";
import CreateProjectForm from "./components/CreateProjectForm.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

import { useState } from "react";

function App() {
  const [projectsList, updateProjectsList] = useState([]);
  console.log(projectsList);
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-[1fr_3fr] min-h-screen">
        <ProjectsList />
        <main className="bg-stone-200">
          {/* <ProjectDetails /> */}
          {/* <NoProjectsPlaceholder></NoProjectsPlaceholder> */}
          <CreateProjectForm
            projectsList={projectsList}
            updateProjectsList={updateProjectsList}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
