import { useState } from 'react';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Work from './Work.jsx';
import About from './About.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <NavBar active={activeSection} setActive={setActiveSection} />

      {activeSection === 'home' && <Home 
        name="Stiven Arias Giraldo" 
        tagline="Video Game Developer" 
        avatar="/assets/img/stiven-profile-matrix.png" 
      />}
      {activeSection === 'work' && <Work 
        name="Stiven Arias Giraldo" 
        tagline="Video Game Developer" 
        avatar="/assets/img/starias-icon.png" 
      />}
      {activeSection === 'about' && <About 
        name="Stiven Arias Giraldo" 
        tagline="Video Game Developer" 
        avatar="/assets/img/Upwork.png" 
      />}
    </>
  );
}
