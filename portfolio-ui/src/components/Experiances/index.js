import React from 'react';
import './index.css';

const Experiences = () => {
    const experienceData = [
        {
            title: 'Frontend Development',
            items: [
                { skill: 'HTML', proficiency: 'Intermediate' },
                { skill: 'CSS', proficiency: 'Intermediate' },
                { skill: 'JavaScript', proficiency: 'Intermediate' },
                { skill: 'React Js', proficiency: 'Experianced' },
            ],
        },
        {
            title: 'Backend Development',
            items: [
                { skill: 'Python', proficiency: 'Intermediate' },
                { skill: 'Node JS', proficiency: 'Intermediate' },
                { skill: 'Express JS', proficiency: 'Intermediate' },
                { skill: 'Git', proficiency: 'Intermediate' },
            ],
        },
        // Add more categories as needed
    ];

    return (
        <>
            <section id="experience">
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    {experienceData.map((category, index) => (
                        <div className="about-containers" key={index}>
                            <div className="details-container">
                                <h2 className="experience-sub-title">{category.title}</h2>
                                <div className="article-container">
                                    {category.items.map((item, itemIndex) => (
                                        <article key={itemIndex}>
                                            <img
                                                src="./assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>{item.skill}</h3>
                                                <p>{item.proficiency}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <img
                    src="./assets/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={() => (window.location.href = './#projects')}
                />
            </section>
        </>
    );
};

export default Experiences;
