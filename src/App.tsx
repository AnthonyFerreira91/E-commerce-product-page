import NavBar from "./layouts/NavBar";
import Product from "./components/Product";
import Gallery from "./components/Gallery";

function App() {

  return (
    <>
      <div className="app">
        <header>
          <NavBar />
        </header>
        <hr/>
        <main>
          <Gallery />
          <Product />
        </main>
      </div>

      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#" target="_blank">Matrixfrpro</a>.
        </div>
      </footer>
    </>
  )
}

export default App
