import '../styles/navbar.css';

import useIsMobile from '../scripts/useIsMobile';
import "../assets/cv_icon/css/fontello.css";

export default function NavBar({ active, setActive }) {
  const isMobile = useIsMobile();
  const showLabels = !isMobile || (isMobile && active === 'home');

  return (
    <div className="nav-wrapper">
      {showLabels && <span className="nav-label name">Stiven Arias Giraldo</span>}

      <nav className="nav-bar">
        {['home', 'work', 'about'].map((section) => (
          <button
            key={section}
            onClick={() => setActive(section)}
            className={active === section ? 'active' : ''}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      {showLabels && <span className="nav-label role">Video Game Developer</span>}
    </div>
  );
}
