// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <About />
        
        {/* Education moved above Skills */}
        <Education />
        
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;