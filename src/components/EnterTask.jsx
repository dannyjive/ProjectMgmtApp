
const EnterTask = () => {
  return (
    <div >
        
      <form className="mt-4 text-left">
        <div className="w-[35rem] mt-16">
            <label htmlFor='title' className="text-sm font-bold uppercase text-stone-500">TITLE</label>
            <input type="text" name="title" id="title" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
        </div>
        <div>
            <label htmlFor='description' className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
            <input type="text" name="description" id="description" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
        </div>
        <div>
            <label htmlFor="dueDate" className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
            <input type="date" name="dueDate" id="dueDate"className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
        </div>
        <div >
            <button className="text-stone-800 hover:text-stone-950">Cancel</button>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" >Save</button>
            {/* SAVE ADDS PROJECT TO PROJECT SIDEBAR */}
        </div>
      </form>

    </div>
  )
}

export default EnterTask
