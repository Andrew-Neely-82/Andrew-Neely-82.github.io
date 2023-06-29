import { Home, About, Skills, PersonalDevelopment, Portfolio, Contact } from "./sections/index.js";
import { Navbar, Footer, LoadingAnimation } from "./components/index.js";
import { useEffect, useState } from "react";
import "./style.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading the page content
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 0);

    // Simulate loading the entire page
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const Sections = () => {
    return (
      <>
        <Navbar />
        <div className="sections">
          {isContentLoaded && (
            <>
              <Home />
              <About />
              <Skills />
              <PersonalDevelopment />
              <Portfolio />
              <Contact />
            </>
          )}
        </div>
        <Footer />
      </>
    );
  };

  return <>{isLoading ? <LoadingAnimation /> : <Sections />}</>;
}

export default App;
