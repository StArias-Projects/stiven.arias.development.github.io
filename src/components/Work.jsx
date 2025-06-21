import { useState } from 'react';
import '../styles/work.css';

import Experience from './work_content/Experience.jsx';
import Projects from './work_content/Projects.jsx';
import ClientOverview from './utils/ClientOverview.jsx';

export default function Work({ setActive }) {
  const [subSection, setSubSection] = useState('experience');

  return (
    <section className="work">
      <div className="work-tabs">
        <button
          onClick={() => setSubSection('experience')}
          className={`work-button work-tabs-button ${subSection === 'experience' ? 'active' : ''}`}
        >
          Experience
        </button>
        <button
          onClick={() => setSubSection('projects')}
          className={`work-button work-tabs-button ${subSection === 'projects' ? 'active' : ''}`}
        >
          Personal Projects
        </button>
      </div>

      <div className="work-content">
        {subSection === 'experience' && <Experience />}
        {subSection === 'projects' && <Projects />}
      </div>

      <div className="work-crosslink">
        {subSection === 'experience' && (
          <>
            <div className="work-divider" />

            <p className="work-crosslink-text">Interested in my personal projects?</p>

            <button onClick={() => {
              setSubSection('projects');
              window.scrollTo(0, 0);
            }} className="work-button work-crosslink-button">
              💻 Explore Projects 💻
            </button>
            <br></br>
            <button
              onClick={() => {
                setActive('about');
                window.scrollTo(0, 0);
              }}
              className="work-button work-crosslink-button"
              style={{ marginTop: '1rem' }}
            >
              😎 Explore About Me 😎
            </button>
          </>
        )}

        {subSection === 'projects' && (
          <>
            <div className="work-divider" />
            <p className="work-crosslink-text">Driven by real-world professional jobs!</p>
            <button onClick={() => {
              setSubSection('experience');
              window.scrollTo(0, 0);
            }} className="work-button work-crosslink-button">
              💻 Explore Experience 💻
            </button>
            <div className="client-overview-container">
              <ClientOverview />
            </div>
          </>
        )}
      </div>
    </section>
  );
}