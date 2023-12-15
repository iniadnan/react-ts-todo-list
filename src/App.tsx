import Nav from "./components/Nav"
import Footer from "./components/Footer"
import InputSearch from "./components/Form/InputSearch"

function App() {

  return (
    <>
      <Nav />
      <main>
        <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
          {/* FORM */}
          <form className="flex justify-center">
            <InputSearch />
          </form>
          {/* TO DO LIST */}
          <div className="max-w-[600px] w-full mx-auto bg-slate-50 py-6 px-5 mt-14">
            <h2 className="font-medium text-lg md:text-xl text-center text-gray-700">To Do Today 😁👊</h2>
            <div className="flex flex-col gap-y-4 mt-8 mb-12">
              <article className="w-full bg-slate-100 py-5 px-5 rounded flex items-center gap-x-3">
                <button type="button" className="h-5 w-5 rounded bg-slate-300 inline-flex items-center justify-center flex-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </button>
                <h3 className="font-medium text-base text-gray-700 grow">Wake Up</h3>
                <span className="inline-block py-2 px-4 bg-green-600 rounded-md text-xs text-white font-medium flex-none">COMPLETE</span>
              </article>
              <article className="w-full bg-slate-100 py-5 px-5 rounded flex items-center gap-x-3">
                <button type="button" className="h-5 w-5 rounded bg-slate-300 inline-flex items-center justify-center flex-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </button>
                <h3 className="font-medium text-base text-gray-700 grow">Wake Up</h3>
                <span className="inline-block py-2 px-4 bg-green-600 rounded-md text-xs text-white font-medium flex-none">COMPLETE</span>
              </article>
            </div>
            <div className="flex gap-x-3">
              <button type="button" className="py-2 px-4 bg-blue-500 font-medium text-base text-white rounded">Add Todo</button>
              <button type="button" className="py-2 px-4 font-medium text-base text-gray-700 rounded">Edit Todo</button>
              <button type="button" className="font-medium text-base text-rose-700 border-b border-rose-700 ml-auto">Delete Selected Todos</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
