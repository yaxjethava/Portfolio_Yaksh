import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {

    // Check screen width
    if (window.innerWidth >= 768) {

      AOS.init({
        duration: 900,
        offset: 100,
        easing: 'ease-in-out',
        once: true,
      });

    }else{

      AOS.init({
        duration: 800,
        offset: 60,
        easing: 'ease-in-out',
        once: true,
      });

    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;