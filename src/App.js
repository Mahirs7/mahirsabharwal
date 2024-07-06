import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Projects from './Components/Projects';



function App() {
  return (
    <div className="App">
      {/* <CustomNavBar /> */}
      <div className="sections">
        <section id="home">
          <MainPage />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        </div>
    </div>
  );
}

export default App;
