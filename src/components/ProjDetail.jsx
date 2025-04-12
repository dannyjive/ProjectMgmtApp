import React from "react";

const ProjDetail = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">~DYNAMIC TEXT~</h1>
      <button className="text-stone-600 hover:text-stone-950">
        Delete BUTTON
      </button>
      <p className="mb-4 text-stone-400">~ Date~</p>
      <p className="text-stone-600 whitespace-pre-wrap">~Proj Description~</p>
      <div className="flex items-center justify-between"></div>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">...</header>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-700 hover:text-stone-950">Add Task</button>
      <p className="text-stone-800 my-4">...</p>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        ...
      </ul>
      <li className="flex justify-between my-4">...</li>

      <button className="text-stone-700 hover:text-red-500">...</button>

    </div>
  );
};

export default ProjDetail;
