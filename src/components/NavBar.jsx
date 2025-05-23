import '../styles/navbar.css';

export default function NavBar({ active, setActive }) {
  return (
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
  );
}