
// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'; 
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services'



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects /> {/* ✅ Use correct component */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
