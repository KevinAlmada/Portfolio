import Header from "./Components/Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AboutMe />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
