import './index.css'

const aboutMe = () => {

    return (
        <>
            <section id="about">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="section-container">
                    <div className="section__pic-container">
                        <img src={process.env.PUBLIC_URL + "./assets/profile-2.png"} alt="profile pic" classNameName='about-pic' />
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img
                                    src="./assets/experience.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <h3>Fresher</h3>
                                <p>MERN Stack Development</p>
                            </div>
                            <div className="details-container">
                                <img
                                    src="./assets/education.png"
                                    alt="Education icon"
                                    className="icon"
                                />
                                <h3>Education</h3>
                                <p>B.Tech. Bachelors of Technology </p>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                                Motivated B.Tech graduate with expertise in both front-end and back-end web development. Seeking a
                                dynamic role to apply technical skills and creative problem-solving for innovative web solutions.

                            </p>
                        </div>
                    </div>
                </div>
                <img
                    src="./assets/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={() => (window.location.href = './#experience')}
                />
            </section>

        </>
    )
}

export default aboutMe