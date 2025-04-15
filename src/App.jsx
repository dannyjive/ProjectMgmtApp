import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";

function App() {


 

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
  
        <ProjectSidebar/>
        <NewProject />
        

      </main>
    </>
  );
}

export default App;
