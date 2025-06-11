import '../styles/homeoverview.css';
import testImage from '../assets/img/starias-icon.png';

export default function HomeOverview() {
    return (
        <div className="home-overview">
            <img className="home-overview-img" src={testImage.src} alt="overview" />
        </div>
    );
}
