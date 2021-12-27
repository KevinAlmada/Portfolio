import Header from "./Components/Header";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
