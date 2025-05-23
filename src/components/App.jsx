import { useState } from 'react';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Work from './Work.jsx';
import About from './About.jsx';

import homeImage from '../assets/img/stiven-profile-matrix.png';
import workImage from '../assets/img/starias-icon.png';
import aboutImage from '../assets/img/Upwork.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <NavBar active={activeSection} setActive={setActiveSection} />

      {activeSection === 'home' && <Home 
        name="Stiven Arias Giraldo" 
        tagline="Video Game Developer" 
        avatar={homeImage.src} 
      />}
      {activeSection === 'work' && <Work 
        name="Stiven Arias Giraldo" 
        tagline="Video Game Developer" 
        avatar={workImage.src} 
      />}
      {activeSection === 'about' && <About 
        name="Stiven Arias Giraldo" 
        tagline="Video Game Developer" 
        avatar={aboutImage.src}
      />}
    </>
  );
}
