import Nav from "./components/Nav"
import Footer from "./components/Footer"
import InputSearch from "./components/Form/InputSearch"

function App() {

  return (
    <>
      <Nav />
      <main>
        <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
          <form className="flex justify-center">
            <InputSearch />
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
