import '../styles/home.css';
import HomeOverview from './HomeOverview';
import useIsMobile from '../scripts/useIsMobile';

export default function Home({ name, tagline, avatar1, avatar2 }) {
  const isMobile = useIsMobile();

  return (
    <section className="home">
      <div className="home-left">
        <div className="home-info">
          <h1>{name}</h1>
          <p>{tagline}</p>
        </div>
        <img
          className="home-avatar"
          src={isMobile ? avatar2 : avatar1}
          alt={name}
        />
      </div>
      <div className="home-right">
        <div className="home-overview-container">
          <HomeOverview />
        </div>
      </div>
    </section>
  );
}
