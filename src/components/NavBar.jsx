import '../styles/navbar.css';

export default function NavBar({ active, setActive }) {
  return (
    <div className="nav-wrapper">
      <span className="nav-label left">Stiven Arias Giraldo</span>

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

      <span className="nav-label right">Video Game Developer</span>
    </div>
  );
}
