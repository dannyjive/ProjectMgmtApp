import React from "react";

const ProjDetail = ({ project }) => {

  if(!project){
    return <p className="text-stone-500">No Project Found.</p>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
      <button className="text-stone-600 hover:text-stone-950">
        Delete BUTTON
      </button>
      <p className="mb-4 text-stone-400">{project.dueDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      <div className="flex items-center justify-between"></div>
      <header className="pb-4 mb-4 border-b-2 border-stone-300"><h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2></header>
      
      <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-700 hover:text-stone-950">Add Task</button>
      <p className="text-stone-800 my-4">...</p>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        <li className="flex justify-between my-4">...</li>
      </ul>

      <button className="text-stone-700 hover:text-red-500">...</button>

    </div>
  );
};

export default ProjDetail;
