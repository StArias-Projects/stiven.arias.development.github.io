import { useState } from 'react';

import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Work from './Work.jsx';
import About from './About.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [workSubSection, setWorkSubSection] = useState('experience');

  return (
    <>
      <NavBar active={activeSection} setActive={setActiveSection} />

      {activeSection === 'home' && <Home />}
      {activeSection === 'work' &&
        <Work
          subSection={workSubSection}
          setSubSection={setWorkSubSection}
          setSection={setActiveSection}
        />}
      {activeSection === 'about' &&
        <About
          setWorkSubSection={setWorkSubSection}
          setSection={setActiveSection}
        />}
    </>
  );
}
