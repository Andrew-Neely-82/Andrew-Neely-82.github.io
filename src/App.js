import { Home, About, Skills, Portfolio, Contact } from "./sections/index.js";
import { Navbar, Footer } from "./components/index.js";
import "./style.scss";

function App() {

  return (
    <>
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
