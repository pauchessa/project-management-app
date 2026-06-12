import ProjectsList from "./components/ProjectsList.jsx";
import NoProjectsPlaceholder from "./components/NoProjectsPlaceholder.jsx";
import CreateProjectForm from "./components/CreateProjectForm.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
function App() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-[1fr_3fr] min-h-screen">
        <ProjectsList />
        <main className="bg-stone-200">
          <ProjectDetails />
          {/* <NoProjectsPlaceholder></NoProjectsPlaceholder> */}
          {/* <CreateProjectForm /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
