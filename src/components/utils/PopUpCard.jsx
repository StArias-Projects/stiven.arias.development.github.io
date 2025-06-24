import { useState } from 'react';

import '../../styles/popupcard.css';
import '../../styles/work.css';

export default function PopUpCard({ project, onClose }) {
    const [isExpanded, setExpandedIndex] = useState(null);

    const toggleExpand = () => {
        setExpandedIndex(!isExpanded);
    };

    return (
        <div className="popup-card-container">
            <button className="popup-close" onClick={onClose}>
                <i className="fa fa-window-close"></i>
            </button>

            <div className="popup-c1">
                <h2 className="popup-title">{project.title}</h2>
                <h3 className="popup-subtitle">{project.subtitle}</h3>
                <p className="popup-date">
                    <i className="fa fa-calendar" style={{ marginRight: '0.5rem' }}></i>
                    {project.date}
                </p>
            </div>

            <div className="popup-c2">
                {project.links && (
                    <div className="popup-links">
                        {project.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="work-button popup-link"
                            >
                                {link.label} <i className="fa fa-arrow-right" style={{ transform: 'rotate(-45deg)' }}></i>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <div className="popup-c3">
                <p className={`popup-description ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    {project.description}
                </p>
                <div className="popup-readmore-wrapper">
                    <button className="popup-readmore" onClick={toggleExpand}>
                        {isExpanded ? (
                            <i className="fa fa-play" style={{ fontSize: '1rem', transform: 'rotate(-90deg)' }}></i>
                        ) : (
                            <i className="fa fa-play" style={{ fontSize: '1rem', transform: 'rotate(90deg)' }}></i>
                        )}
                    </button>
                </div>
                {project.bullets && (
                    <ul className="popup-bullets">
                        {project.bullets.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                )}
                <div className="popup-keywords">
                    {project.keywords.map((kw, i) => (
                        <span key={i} className="popup-keyword">{kw}</span>
                    ))}
                </div>
            </div>

            <div className="popup-c4">
                <div className="popup-media">
                    {project.mediaComponent}
                </div>
            </div>
        </div>
    );
}
