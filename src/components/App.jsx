import { useState } from 'react';

import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Work from './Work.jsx';
import About from './About.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('work');

  return (
    <>
      <NavBar active={activeSection} setActive={setActiveSection} />

      {activeSection === 'home' && <Home />}
      {activeSection === 'work' && <Work setActive={setActiveSection} />}
      {activeSection === 'about' && <About />}
    </>
  );
}
