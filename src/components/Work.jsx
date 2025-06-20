import { useState } from 'react';
import '../styles/work.css';

import Experience from './work_content/Experience.jsx';
import Projects from './work_content/Projects.jsx';

export default function Work() {
  const [subSection, setSubSection] = useState('projects');

  return (
    <section className="work">
      <div className="work-tabs">
        <button
          onClick={() => setSubSection('experience')}
          className={subSection === 'experience' ? 'active' : ''}
        >
          Experience
        </button>
        <button
          onClick={() => setSubSection('projects')}
          className={subSection === 'projects' ? 'active' : ''}
        >
          Personal Projects
        </button> 
      </div>

      <div className="work-content">
        {subSection === 'experience' && <Experience />}
        {subSection === 'projects' && <Projects />}
      </div>
    </section>
  );
}