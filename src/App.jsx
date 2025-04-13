import EnterTask from "./components/EnterTask";
import ProjDetail from "./components/ProjDetail";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        {/* SIDE BAR */}
        
          <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <div className="w-[35rem] mt-16">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
              Your Projects
            </h2>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
              + Add Project
            </button>
            <ul className="mt-8">
              <li>
                {" "}
                <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
                  ~DYNAMIC PROJECTS~
                </button>
              </li>
            </ul>
            </div>
          </aside>
        



        {/* No Project Selected */}

        {/* <div div className="flex items-center gap-4">
          <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src="logo.png" />
            <h2 className="text-xl font-bold text-stone-500 my-4">
              No Project Selected
            </h2>
            <p className="text-stone-400 mb-4">
              Select a project or get started with a new one
            </p>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
              Create new project
            </button>
          </div>
        </div> */}

      {/* CREATE/ENTER TASK DETAILS */}
        <EnterTask />

      {/* PROJECT DETAIL PAGE*/}
        {/* <ProjDetail/> */}
      </main>
    </>
  );
}

export default App;
