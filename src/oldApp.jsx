import NewProject from "./components/oldNewProject";
import ProjDetail from "./components/oldProjDetail";
import AddProj from "./components/oldAddProj";
import ProjectSidebar from "./components/ProjectSidebar";
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
        <ProjectSidebar/>
        

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
