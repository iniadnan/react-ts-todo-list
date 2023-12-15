import { useEffect, useState } from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import InputSearch from "./components/Form/InputSearch"
import InputNewTodo from "./components/Form/InputNewTodo"

function App() {

  const [todos, setTodos] = useState([])
  const [addTodo, setAddTodo] = useState(false)

  useEffect(() => {
  }, [])

  const toggleAddTodo = () => {
    setAddTodo(prevState => {
      return !prevState
    })
  }

  return (
    <>
      <Nav />
      <main>
        <div className="container mx-auto pt-10 md:pt-12 lg:pt-14 pb-20 px-5 md:px-0">
          {/* FORM */}
          <form className="flex justify-center">
            <InputSearch />
          </form>
          {/* TO DO LIST */}
          <div className="max-w-[600px] w-full mx-auto bg-slate-50 py-6 px-5 mt-10 md:mt-12 lg:mt-14">
            <h2 className="font-medium text-lg md:text-xl text-center text-gray-700">To Do Today 😁👊</h2>
            <form className={`${addTodo ? 'block' : 'hidden'} mt-7`}>
              <InputNewTodo />
            </form>
            <div className="flex flex-col gap-y-4 mt-8 mb-8 md:mb-10 lg:mb-12">
            </div>
            <div className="flex gap-x-3">
              <button onClick={toggleAddTodo} type="button" className="py-2 px-3 md:px-4 bg-blue-500 font-medium text-sm md:text-base text-white rounded">Add Todo</button>
              <button type="button" className={`${todos.length > 0 ? 'inline-block' : 'hidden'} py-2 px-3 md:px-4 font-medium text-base text-gray-700 rounded`}>Edit Todo</button>
              <button type="button" className={`${todos.length > 0 ? 'inline-block' : 'hidden'} font-medium text-sm md:text-base text-rose-700 border-b border-rose-700 ml-auto`}>Delete Selected Todos</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
