import Welcome from "./pages/Welcome";
import Header from "./Components/Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import LanguageContext from "./context/LanguageContext";
import { useState } from "react";
function App() {
  const [language, setLanguage] = useState(false)
  return (
    <LanguageContext.Provider value={{language,setLanguage}} >
      <div className="App">
        <Header />
        <Welcome />
        <AboutMe />
        <Projects />
        <Contact/>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
