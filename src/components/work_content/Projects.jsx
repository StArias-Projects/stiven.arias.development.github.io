import { useState } from 'react';
import '../../styles/workcard.css';

import Gif from '../utils/Gif.jsx';
import YouTube from '../utils/YouTube.jsx';
import Video from '../utils/Video.jsx';

import hells_kichenette from '../../assets/video/hells-kichenette.mp4'
import colour_space from '../../assets/video/colourSpace-gameplay.mp4'
import unity_save from '../../assets/video/unity-save-system.mp4'

export default function Projects() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // Projects Data
    const projects = [
        {
            title: 'Hell\'s Kichenette',
            company: 'Bullet Hell Jam #6 - Ranked 72/230',
            startDate: 'May 2025',
            endDate: '10 days development - 2 people',
            description:
                'The only restaurant where bullets fly faster than orders. ' +
                'You\'re the last line of defense between chaos and cuisine ' +
                'in a top-down, fast-paced bullet hell cooking game. Customers ' +
                'queue up with bizarre orders like “Paella” and “Cosmic Burger” — ' +
                'and their patience is dangerously short.\n\n' +
                '🔸Dodge deadly projectiles like spinning knives and flying pans\n' +
                '🔸Collect ingredients to complete chaotic orders\n' +
                '🔸Serve unstable customers before they go berserk and start attacking!\n' +
                '🔸Watch out for black hole spawners throwing food',
            bullets: [
                'Game Developer',
                'Bullet Hell Jam #6',
                'Developed within 10 days',
                'Code architecture, gameplay mechanics, audio system (FMOD), and Menu system',
                'Usability and UX design',
                'QA Testing',
            ],
            keywords: ['Unity', 'C#', 'WebGl'],
            mediaComponent: <Video src={hells_kichenette} />,
            links: [
                { label: 'Github Repository', url: 'https://github.com/StArias-Projects/hells-kitchenette' },
                { label: 'Try it yourself!', url: 'https://randomplayerstudios.itch.io/hells-kitchenette' },
                { label: 'Bullet Hell Jam #6 Results - Ranked 72nd', url: 'https://itch.io/jam/bullet-jam-6/results?page=4' },
            ],
        },
        {
            title: 'Colour Space Video Game - Game Jam Winner',
            company: 'Macro Jam #6',
            startDate: 'April 2025',
            endDate: '4 days development - 2 people',
            description:
                'Colour Space is a survival action game in which you have ' +
                'to defeat enemies by reflecting their own projectiles. ' +
                'Move around the space, pickup incredible objects, and, more ' +
                'important, don\'t die.\n' +
                'You will be able to look at your stats at the end of the game ' +
                'and try another round.\n' +
                'This video game was developed for the Macro Jam #6 on itch.io ' +
                'platform during 4 days. Me and my parter designed and developed the ' +
                'entire video game from scratch. I primarily focused on the code ' +
                'architecture we were going to follow. After that, ' +
                'I worked on the gameplay mechanics, enemy spawning system, audio system ' +
                'integration using FMOD, and the Menu System  to change scenes.',
            bullets: [
                'Game Developer',
                'Macro Game Jam #6',
                'Developed within 4 days',
                'Code architecture, gameplay mechanics, audio system (FMOD), and Menu system',
                'Usability and UX design',
                'QA Testing',
            ],

            keywords: ['Unity', 'C#', 'WebGl'],
            mediaComponent: <Video src={colour_space} />,
            links: [
                { label: 'Github Repository', url: 'https://github.com/StArias-Projects/colour-space-jam' },
                { label: 'Try it yourself!', url: 'https://orphic-dreaming.itch.io/colour-space' },
                { label: 'Macro Jam #6 Results - Ranked Winner', url: 'https://itch.io/jam/macro-jam-06/results' },
            ],
        },
        {
            title: 'Unity Save System',
            company: 'Unity SDK',
            startDate: 'March 2025',
            endDate: 'Multiplatform',
            description:
                'Save System is a personal and free tool-project to save the data ' +
                'of video games on different platforms.\n' +
                'The Save System allows you to save the progress of a video game on ' +
                'the disk of the device using the Unity Persistence Data Path.\n' +
                'The tool is intended to be open-source to let you modify and custom ' +
                'the scripts as you need for your own project.\n' +
                'I developed this from scratch including all the code architecture, ' +
                'functionalities, and documentation.',
            bullets: [
                'Unity Tool Developer',
                'Unity Multi Platform Game System',
                'Persistence Data Path',
                'Documentation, Tutorial, Unity Package',
                'JSON Support & Data Serialization',
                'Custom Debug Logger with different colours',
            ],

            keywords: ['Unity', 'C#', 'SDK'],
            mediaComponent: <Video src={unity_save} />,
            links: [
                { label: 'Github repository', url: 'https://github.com/StArias-Projects/unity-save-system' },
                { label: 'Unity Save System on Itch.io', url: 'https://starias.itch.io/unity-save-system' },
            ],
        },
    ];

    // Card Structure
    return (
        <div className="card-container">
            {projects.map((project, index) => (
                <div key={index} className="card">
                    <div className="card-grid">
                        <div className="card-c1">
                            <h3 className="card-title">{project.title}</h3>
                            <h3 className="card-company">{project.company}</h3>
                            <p className="card-dates">
                                <i className="fa fa-calendar" style={{ fontSize: '1rem', marginRight: '0.5rem' }}></i>
                                {project.startDate} – {project.endDate}
                            </p>
                        </div>

                        <div className="card-c2">
                            {project.links && (
                                <div className="card-links">
                                    {project.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="card-link"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="card-c3">
                            <p className={`card-description ${expandedIndex === index ? 'expanded' : 'collapsed'}`}>
                                {project.description}
                            </p>
                            <div className="card-readmore-wrapper">
                                <button className="card-readmore" onClick={() => toggleExpand(index)}>
                                    {expandedIndex === index ? (
                                        <i className="fa fa-play" style={{ fontSize: '1rem', transform: 'rotate(-90deg)' }}></i>
                                    ) : (
                                        <i className="fa fa-play" style={{ fontSize: '1rem', transform: 'rotate(90deg)' }}></i>
                                    )}
                                </button>
                            </div>
                            {project.bullets && (
                                <ul className="card-bullets">
                                    {project.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="card-keywords">
                                {project.keywords.map((kw, i) => (
                                    <span key={i} className="card-keyword">{kw}</span>
                                ))}
                            </div>
                        </div>

                        <div className="card-c4">
                            <div className="card-asset-container">
                                {project.mediaComponent}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
