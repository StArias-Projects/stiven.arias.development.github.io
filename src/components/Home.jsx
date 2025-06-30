import '../styles/home.css';

import "../assets/upwork/css/fontello.css";
import "../assets/cv_icon/css/fontello.css";

import ClientOverview from './utils/ClientOverview.jsx';
import YouTube from './utils/YouTube.jsx';
import SocialLinks from './utils/SocialLinks.jsx';

const video_trailer_id = "Hy9X7DcGjmc";

export default function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <div className="home-left-columns">
          <div className="home-asset-container">
            <YouTube videoId={video_trailer_id} />
          </div>
          <SocialLinks isVertical={true} />
        </div>
      </div>
      <div className="home-right">
        <div className="home-overview-container">
          <ClientOverview />
        </div>
      </div>
    </section>
  );
}
