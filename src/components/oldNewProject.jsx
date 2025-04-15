import { useState } from "react";

const NewProject = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, dueDate: date });
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <div>
      <form className="mt-4 text-left" onSubmit={handleSubmit}>
        <div className="w-[35rem] mt-16">
          <label
            htmlFor="title"
            className="text-sm font-bold uppercase text-stone-500"
          >
            TITLE
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-sm font-bold uppercase text-stone-500"
          >
            DESCRIPTION
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="dueDate"
            className="text-sm font-bold uppercase text-stone-500"
          >
            DUE DATE
          </label>
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <p className="flex flex-col gap-1 my-4">
            <menu>
              <li>
                <button
                  className="text-stone-800 hover:text-stone-950"
                  type="button"
                  onClick={() => {
                    setTitle("");
                    setDescription("");
                    setDate("");
                  }}
                >
                  Cancel
                </button>
              </li>
              <li>
                <button
                  className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                  type="submit"
                >
                  Save
                </button>
              </li>
            </menu>
          </p>
        </div>
      </form>
    </div>
  );
};

export default NewProject;
