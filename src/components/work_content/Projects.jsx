import '../../styles/workcard.css';

export default function Projects() {
  const projects = [
    {
      title: 'ChronoBlade',
      startDate: 'Feb 2024',
      endDate: 'Ongoing',
      description:
        'A fast-paced pixel art action platformer inspired by 16-bit era games. Developed in Unity with custom shaders and parallax scrolling.',
      keywords: ['Unity', 'Pixel Art', 'Shaders', 'Level Design'],
      media: '../assets/video/corewar.mp4'
    },
    {
      title: 'Portfolio Website',
      startDate: 'Oct 2023',
      endDate: 'Nov 2023',
      description:
        'A fully responsive portfolio built with Astro and React. Includes custom animations, dynamic routing, and SEO optimization.',
      keywords: ['Astro', 'React', 'Animations', 'SEO'],
      media: '../assets/video/corewar.mp4'
    }
  ];

  return (
    <div className="card-container">
      {projects.map((project, index) => (
        <div key={index} className="card">
          <div className="card-text">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-dates">
              {project.startDate} – {project.endDate}
            </p>
            <p className="card-description">{project.description}</p>
            <div className="card-keywords">
              {project.keywords.map((kw, i) => (
                <span key={i} className="card-keyword">{kw}</span>
              ))}
            </div>
          </div>
          <div className="card-media">
            {project.media.endsWith('.mp4') ? (
              <video src={project.media} autoPlay loop muted playsInline />
            ) : (
              <img src={project.media} alt={project.title + ' media'} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
