import '../styles/about.css';
import '../styles/cards.css';
import '../styles/work.css';

import ClientOverview from './utils/ClientOverview.jsx';
import SocialLinks from './utils/SocialLinks.jsx';

import profile from '../assets/img/stiven-profile.jpg';
import hisplayer from '../assets/img/hisplayer-meeting.png';

export default function About({ setWorkSubSection, setSection }) {

  return (
    <section className="about">

      <SocialLinks isVertical={false} />

      <div className="work-divider" />

      <div className="card-container">
        <div className="card about-card">
          <div className="card-grid about-card-grid">
            <div className="about-card-c1">
              <h3 className="card-title about-card-title">😁 Who's Behind the Code?</h3>
              <div className="about-card-description-wrapper">
                <p className="about-card-description">
                  Greetings, creature of the real world!
                  <br></br>
                  <br></br>
                  My name is Stiven Arias Giraldo, and by day (and often night), I'm a freelance game developer and
                  software engineer, working mainly through <a href="https://www.upwork.com/en-gb/freelancers/~018f7e0e1df08439dd" target="_blank" rel="noopener noreferrer">Upwork <i className="fa fa-arrow-right" style={{ transform: 'rotate(-45deg)' }}></i></a>, but
                  also reachable on <a href="https://es.linkedin.com/in/stiven-arias-giraldo-9219241b2" target="_blank" rel="noopener noreferrer">LinkedIn <i className="fa fa-arrow-right" style={{ transform: 'rotate(-45deg)' }}></i></a> or
                  the old-fashioned way via <a href="mailto:starias2797@gmail.com" target="_blank" rel="noopener noreferrer">email <i className="fa fa-arrow-right" style={{ transform: 'rotate(-45deg)' }}></i></a>.
                  <br></br>
                  <br></br>
                  I earned my bachelor's degree in Video Game Development from Universidad Complutense of Madrid, and have
                  accumulated real-world experience, alongside a variety of personal projects that kept me inspired,
                  caffeinated, and occasionally sleep-deprived.
                  <br></br>
                  <br></br>
                  In both academic and professional realms, I've developed a reputation for writing clean, efficient code, tackling
                  complex challenges, and thriving in collaborative environments. I'm passionate about taking initiative, fostering
                  teamwork, and keeping things optimistic, even when the code gets messy.
                  <br></br>
                  <br></br>
                  Whether you arrived here on purpose or by cosmic accident, welcome. Stay a while, and feel free to explore.
                </p>
              </div>
            </div>
            <div className="about-card-c2">
              <div className="about-card-asset-container">
                <img
                  className="about-avatar"
                  src={profile.src}
                  alt={"avatar"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card about-card">
          <div className="card-grid about-card-grid">
            <div className="about-card-c1">
              <h3 className="card-title about-card-title">🚀 How Do I Tackle Challenges?</h3>
              <div className="about-card-description-wrapper">
                <p className="about-card-description">
                  I have solid experience that shows I can write high-quality code and solve complex problems. I'm especially
                  skilled in  problem-solving, organizing code structure, and helping manage and coordinate projects.
                  <br></br>
                  <br></br>
                  I enjoy working with different kinds of teams, and always bring a positive attitude and strong technical skills to the table.
                  <br></br>
                  <br></br>
                  Efficiency and precision guide the execution of my tasks, whereas larger challenges are addressed by first
                  understanding the overall context and then designing a well-structured plan of action.
                </p>
              </div>
              <h3 className="card-title about-card-title">🤝 What's It Like to Work With Me?</h3>
              <div className="about-card-description-wrapper">
                <p className="about-card-description">
                  Beyond my technical abilities, I'm a people person with strong communication and leadership skills. I'm open-minded,
                  adapt easily, and get along well with people at all levels. I enjoy team-based work and always aim to create a
                  collaborative and positive environment. I tackle problems with a clear mindset and stay focused on continuous
                  learning and improvement, which helps me grow and succeed in any work setting.
                </p>
              </div>
            </div>
            <div className="about-card-c2">
              <div className="about-card-asset-container">
                <img
                  className="about-avatar"
                  src={hisplayer.src}
                  alt={"avatar"}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="work-crosslink">
        <div className="work-divider" />
        <p className="work-crosslink-text">Driven by Real-World Professional Jobs!</p>
        <button onClick={() => {
          setSection('work')
          setWorkSubSection('experience');
          window.scrollTo(0, 0);
        }} className="work-button work-crosslink-button">
          💻 Explore Experience 💻
        </button>
        <div className="client-overview-container">
          <ClientOverview />
        </div>

        <div className="work-divider" />
        <p className="work-crosslink-text">Interested in My Personal Projects?</p>
        <button onClick={() => {
          setSection('work')
          setWorkSubSection('projects');
          window.scrollTo(0, 0);
        }} className="work-button work-crosslink-button">
          👾 Explore Projects 👾
        </button>
      </div>
    </section>
  );
}