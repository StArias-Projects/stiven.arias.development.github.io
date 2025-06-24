import '../../styles/sociallinks.css'

export default function SocialLinks({ isVertical }) {
  return (
    <div className="social-links">
      <div className='social-links-wrapper'>
        <div className={`${isVertical ? 'social-links-vertical' : 'social-links-horizontal'}`}>
          <a href={`${import.meta.env.BASE_URL}assets/Stiven_Arias_CV.pdf`} target="_blank" rel="noopener noreferrer">
            <i className="icon-cv"></i>
          </a>
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
  );
}
