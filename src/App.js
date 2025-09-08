import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import './styles/animations.css'; // Import animations

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const handleContact = () => setView('contact');
    const handleServices = () => setView('services');
    const handleAbout = () => setView('about');
    const handleHome = () => setView('home');
    const handleWork = () => setView('work');
    window.addEventListener('nav:contact', handleContact);
    window.addEventListener('nav:services', handleServices);
    window.addEventListener('nav:about', handleAbout);
    window.addEventListener('nav:home', handleHome);
    window.addEventListener('nav:work', handleWork);
    return () => {
      window.removeEventListener('nav:contact', handleContact);
      window.removeEventListener('nav:services', handleServices);
      window.removeEventListener('nav:about', handleAbout);
      window.removeEventListener('nav:home', handleHome);
      window.removeEventListener('nav:work', handleWork);
    };
  }, []);

  const renderView = () => {
    switch (view) {
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'work':
        return <Work />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="App">
      <Navbar />
      {renderView()}
    </div>
  );
}

export default App;