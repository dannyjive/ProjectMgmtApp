import NewProject from "./components/NewProject";
import ProjDetail from "./components/ProjDetail";
import AddProj from "./components/AddProj";
import { useState } from "react";

function App() {
  const [activeComponent, setActiveComponent] = useState("add");
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectID] = useState(null);

  const addProjectHandler = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random().toString(),
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setActiveComponent("add");
  };

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        {/* SIDE BAR */}

        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <div className="w-[35rem] mt-16">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
              Your Projects
            </h2>
            <button
              className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
              onClick={() => setActiveComponent("new")}
            >
              + Add Project
            </button>
            <ul className="mt-8">
              {projects.map((proj) => (
                <li key={proj.id}>
                  <button
                    className=" text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                    onClick={() => {
                      setActiveComponent("detail");
                      setSelectedProjectID(proj.id);
                    }}
                  >
                    {proj.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* CONDITIONAL RENDERING */}
        {activeComponent === "add" && (
          <AddProj click={() => setActiveComponent("new")} />
        )}

        {/* CREATE NEW PROJECT */}
        {activeComponent === "new" && <NewProject onSave={addProjectHandler} />}

        {/* CREATE/ENTER TASK DETAILS */}
        {activeComponent === "detail" && (
          <ProjDetail
            project={projects.find((p) => p.id === selectedProjectId)}
          />
        )}
      </main>
    </>
  );
}

export default App;
