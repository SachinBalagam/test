import React from 'react';
import './index.css';

const Projects = () => {
    const projectData = [
        {
            title: 'Rock Paper',
            image: '/assets/rock-paper.jpg',
            githubLink: 'https://githubrockpaper.com/',
            liveDemoLink: 'https://rockpaperscshi.ccbp.tech/',
        },
        {
            title: 'Jobby App',
            image: '/assets/job-search.png',
            githubLink: 'https://github.com/shivaprasadmakela/jobby-app-react-js',
            liveDemoLink: 'https://jobbyappshv.ccbp.tech/login',
        },
        {
            title: 'Todo List',
            image: '/assets/to-do-list.png',
            githubLink: 'https://githubtodos.com/',
            liveDemoLink: 'https://todoshivapra.ccbp.tech/',
        },

        // Add more projects as needed
    ];

    return (
        <>
            <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        {projectData.map((project, index) => (
                            <div className="details-container color-container" key={index}>
                                <div className="article-container">
                                    <img
                                        src={process.env.PUBLIC_URL + project.image}
                                        alt={`Project ${index + 1}`}
                                        className="project-img"
                                    />
                                </div>
                                <h2 className="experience-sub-title project-title">{project.title}</h2>
                                <div className="btn-container">
                                    <button
                                        className="btn btn-color-2 project-btn"
                                        onClick={() => (window.location.href = project.githubLink)}
                                    >
                                        Github
                                    </button>
                                    <button
                                        className="btn btn-color-2 project-btn"
                                        onClick={() => (window.location.href = project.liveDemoLink)}
                                    >
                                        Live Demo
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default Projects;
