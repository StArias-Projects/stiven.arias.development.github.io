import '../styles/home.css';
import "../assets/upwork/css/fontello.css";
import "../assets/upwork/css/fontello-embedded.css";

import HomeOverview from './home_content/HomeOverview.jsx';

import useIsMobile from '../scripts/useIsMobile';

import homeImageV from '../assets/img/stiven-matrix-vertical.png';
import homeImageM from '../assets/img/stiven-matrix-mobile.png';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <section className="home">
      <div className="home-left">
        <div className="home-left-columns">
          <div className="avatar-container">
            <img
              className="home-avatar"
              src={isMobile ? homeImageM.src : homeImageV.src}
              alt={"avatar"}
            />
          </div>
          <div className="home-links">
            <a href="https://www.upwork.com/en-gb/freelancers/~018f7e0e1df08439dd" target="_blank" rel="noopener noreferrer">
              <i className="icon-upwork"></i>
            </a>
            <a href="https://es.linkedin.com/in/stiven-arias-giraldo-9219241b2" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:starias2797@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-envelope"></i>
            </a>
            <a href="https://github.com/StArias" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://starias.itch.io/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-itch-io"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="home-overview-container">
          <HomeOverview />
        </div>
      </div>
    </section>
  );
}
