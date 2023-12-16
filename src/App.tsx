import { useEffect, useState } from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ToDoCard from "./components/ToDoCard"
import InputSearch from "./components/Form/InputSearch"
import InputNewTodo from "./components/Form/InputNewTodo"
import generateRandomString from "./helpers/randomString"
import useLocalStorage from "./hooks/useLocalStorage"

interface Todos {
  id: string,
  todo: string,
  status: string
}

function App() {

  const [todos, setTodos] = useState<Todos[]>([])
  const [todosSelected, setTodosSelected] = useState<Todos[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [addTodo, setAddTodo] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const { value: valueLS, updateValue: updateValueLS } = useLocalStorage<Todos[]>('todo', []);

  useEffect(() => {
    if (valueLS instanceof Array) {
      setTodos(valueLS)
    }
  }, [valueLS])

  const filteredTodos = todos.filter(todo =>
    todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAddTodo = () => {
    setAddTodo(prevState => {
      return !prevState
    })
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const insertNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const todo = {
      id: generateRandomString(5),
      todo: newTodo,
      status: "incomplete"
    }
    setTodos([...todos, todo]);
    updateValueLS([...todos, todo]);

    setNewTodo("")
    setAddTodo(false)
  }

  const deleteTodo = () => {
    setTodos(todos.filter(todo => !todosSelected.some(todoSelected => todoSelected.id === todo.id)))
    updateValueLS(todos.filter(todo => !todosSelected.some(todoSelected => todoSelected.id === todo.id)))
  }

  const onToggleSelect = (todo: { id: string, todo: string, status: string }) => {
    const isTodoSelected = todosSelected.some(todoSelected => todoSelected.id === todo.id);
    if (isTodoSelected) {
      setTodosSelected(todosSelected.filter((todoSelected) => todoSelected.id !== todo.id));
    } else {
      setTodosSelected([...todosSelected, todo]);
    }
  }

  const onToggleStatus = (id: string) => {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === id ? { ...todo, status: todo.status === 'completed' ? 'incomplete' : 'completed' } : todo
      )
    )
    updateValueLS(todos)
  }

  return (
    <>
      <Nav />
      <main>
        <div className="container mx-auto pt-10 md:pt-12 lg:pt-14 pb-20 px-5 md:px-0">
          {/* FORM */}
          <form className="flex justify-center">
            <InputSearch onSearchTodo={handleSearch} />
          </form>
          {/* TO DO LIST */}
          <div className="max-w-[600px] w-full mx-auto bg-slate-50 py-6 px-5 mt-10 md:mt-12 lg:mt-14">
            <h2 className="font-medium text-lg md:text-xl text-center text-gray-700">To Do Today 😁👊</h2>
            <form className={`${addTodo ? 'block' : 'hidden'} mt-7`} onSubmit={insertNewTodo}>
              <InputNewTodo onInputChange={handleInput} />
            </form>
            <div className="flex flex-col gap-y-4 mt-8 mb-8 md:mb-10 lg:mb-12">
              {filteredTodos.map((todo) => <ToDoCard key={todo.id} id={todo.id} todo={todo.todo} status={todo.status} toggleSelect={onToggleSelect} toggleStatus={onToggleStatus} />)}
            </div>
            <div className="flex gap-x-3">
              <button onClick={toggleAddTodo} type="button" className="py-2 px-3 md:px-4 bg-blue-500 font-medium text-sm md:text-base text-white rounded">Add Todo</button>
              <button type="button" className={`${filteredTodos.length > 0 ? 'inline-block' : 'hidden'} py-2 px-3 md:px-4 font-medium text-base text-gray-700 rounded`}>Edit Todo</button>
              <button onClick={deleteTodo} type="button" className={`${filteredTodos.length > 0 ? 'inline-block' : 'hidden'} font-medium text-sm md:text-base text-rose-700 border-b border-rose-700 ml-auto`}>Delete Selected Todos</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
