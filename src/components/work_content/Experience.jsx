import { useState } from 'react';
import '../../styles/cards.css';
import '../../styles/work.css';

import Gif from '../utils/Gif.jsx';
import YouTube from '../utils/YouTube.jsx';
import hisplayer_gif from '../../assets/gif/hisplayer.gif';
import labotec_gif from '../../assets/gif/labotec.gif';

const video_trailer_id = "Hy9X7DcGjmc";

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // Experience Data
    const jobs = [
        {
            title: 'Freelancer | Video Game Developer | Software Engineer',
            company: 'Upwork Platform',
            startDate: 'March 2025',
            endDate: 'Ongoing',
            description:
                'Upwork connects businesses with independent professionals and agencies around the globe. ' +
                'It is a marketplace for freelancers in fields like graphic design, web development, ' +
                'marketing and many other categories.\n' +
                'I specialize in Video Game Development and Software Engineer jobs. Nevertheless, I\'m open to' +
                'different kind of jobs through the platform as long as they fit my interests.',
            bullets: [
                'Unity/Unreal game development',
                'Unity/Unreal multiplatform plugin integration',
                'Software architecture',
                'QA Testing',
                'Android Studio',
                'Analytical problem-solving',
                'Usability and UX design',
                'Customer support',
                'Blender, Photoshop, and Video Edition Tools',
            ],
            keywords: [],
            mediaComponent: <YouTube videoId={video_trailer_id} />,
            links: [
                { label: 'Reach out to me here!', url: 'https://www.upwork.com/en-gb/freelancers/~018f7e0e1df08439dd' },
            ],
        },
        {
            title: 'Unity/Unreal Software Engineer',
            company: 'HISPlayer and NexPlayer',
            startDate: 'Oct 2022',
            endDate: 'Sep 2024',
            description:
                'HISPlayer is a multi-platform video streaming SDK for Unity and Unreal Engine. ' +
                'I primarily developed for Unity targeting Android, iOS, macOS, and visionOS. ' +
                'I also contributed to platforms such as WebGL, Windows Standalone + UWP, and Unreal for Android. ' +
                'My work included native plugin integration, performance optimization, platform compatibility, ' +
                'code obfuscation, packaging, sampling, and QA. ' +
                'I collaborated closely with clients and teammates to improve documentation and ' +
                'integration workflows.',
            bullets: [
                'Video Streaming Player SDK for Unity and Unreal Engine',
                'Development and integration of native plugins for different platforms',
                'Unity and Unreal code obfuscation, packaging, sampling and QA',
                'Project and task management; adaptability to priority changes',
                'Customer support',
            ],
            keywords: ['Unity', 'C#', 'Video Streaming', 'Plugins', 'Cross-platform'],
            mediaComponent: <Gif src={hisplayer_gif.src} />,
            links: [
                { label: 'Company Website', url: 'https://hisplayer.com/' },
                { label: 'Recommendation Letter - CEO (Screenshot)', url: `${import.meta.env.BASE_URL}assets/carlos-recommendation.png` },
                { label: 'Recommendation Letter - CEO (LinkedIn)', url: 'https://es.linkedin.com/in/stiven-arias-giraldo-9219241b2#recommendations' },
                { label: 'Recommendation Letter - Team Leader (PDF)', url: `${import.meta.env.BASE_URL}assets/ivan-derianto-recommendation.pdf` },
            ],
        },
        {
            title: 'Video Game Programmer - Unity',
            company: 'Labotec Games',
            startDate: 'Sep 2021',
            endDate: 'Nov 2021',
            description:
                'I worked as an intern for three months, contributing to the development of ' +
                'two video games using Unity.\n' +
                'I was primarily engaged in the mobile game project, an endless runner where ' +
                'the player controls a car using eye-tracking technology to dodge obstacles. ' +
                'I specialized in developing the eye-tracking system, its calibration, and the ' +
                'user interface, focusing on usability and logic.' +
                'The second project, an FPS shooter, was in an early stage, where I worked on ' +
                'TCP/IP and UDP protocols.' +
                'I also collaborated with artists and designers, enhancing my teamwork and ' +
                'communication skills. ' +
                'We followed the Scrum methodology, with daily in-person meetings to plan tasks ' +
                'and discuss project aspects.',
            bullets: [
                'Mobile video game development',
                'Eye-tracking technology to detect the eyes using the camera',
                'UI/UX',
                'Collaboration with artists and designers',
                'TCP/IP and UDP',
                'Scrum',
            ],
            keywords: ['Unity', 'C#', 'Java'],
            mediaComponent: <Gif src={labotec_gif.src} />,
            links: [
                { label: 'Company LinkedIn', url: 'https://www.linkedin.com/company/labotec-games/' },
            ],
        },
    ];

    // Card Structure
    return (
        <div className="card-container">
            {jobs.map((job, index) => (
                <div key={index} className="card">
                    <div className="card-grid">
                        <div className="card-c1">
                            <h3 className="card-title">{job.title}</h3>
                            <h3 className="card-company">{job.company}</h3>
                            <p className="card-dates">
                                <i className="fa fa-calendar" style={{ fontSize: '1rem', marginRight: '0.5rem' }}></i>
                                {job.startDate} – {job.endDate}
                            </p>
                        </div>

                        <div className="card-c2">
                            {job.links && (
                                <div className="card-links">
                                    {job.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="work-button card-link"
                                        >
                                            {link.label} <i className="fa fa-arrow-right" style={{ transform: 'rotate(-45deg)' }}></i>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="card-c3">
                            <p className={`card-description ${expandedIndex === index ? 'expanded' : 'collapsed'}`}>
                                {job.description}
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
                            {job.bullets && (
                                <ul className="card-bullets">
                                    {job.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="card-keywords">
                                {job.keywords.map((kw, i) => (
                                    <span key={i} className="card-keyword">{kw}</span>
                                ))}
                            </div>
                        </div>

                        <div className="card-c4">
                            <div className="card-asset-container">
                                {job.mediaComponent}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
