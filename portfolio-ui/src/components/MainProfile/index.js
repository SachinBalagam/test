import { Component } from "react";
import './index.css';
import AboutMe from '../AboutMe/index'
import Experiences from '../Experiances/index'
import Projects from '../Projects/index'
import ContactForm from '../ContactForm/index'

class MainProfile extends Component {

    toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    render() {
        return (
            <>
                <nav id="desktop-nav">
                    <div className="logo">shiva prasad m</div>
                    <div>
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <nav id="hamburger-nav">
                    <div className="logo">shiva prasad m</div>
                    <div className="hamburger-menu">
                        <div className="hamburger-icon" onClick={() => this.toggleMenu()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="menu-links">
                            <li><a href="#about" onClick={() => this.toggleMenu()}>About</a></li>
                            <li><a href="#experience" onClick={() => this.toggleMenu()}>Experience</a></li>
                            <li><a href="#projects" onClick={() => this.toggleMenu()}>Projects</a></li>
                            <li><a href="#contact" onClick={() => this.toggleMenu()}>Contact</a></li>
                        </div>
                    </div>
                </nav>
                <section id="profile">
                    <div className="section__pic-container">
                        <img src={process.env.PUBLIC_URL + '/assets/profile-1.png'} alt="shiva prasad profile" />
                    </div>
                    <div className="section__text">
                        <p className="section__text__p1">Hello, I'm</p>
                        <h1 className="title">Shiva Prasad M</h1>
                        <p className="section__text__p2">MERN Stack</p>
                        <div className="btn-container">
                            <button className="btn btn-color-2"
                                onClick={() => window.open(process.env.PUBLIC_URL + '/assets/shiva-portfolio-resume.pdf')}
                            >
                                Download CV
                            </button>
                            <button className="btn btn-color-1" onClick={() => (window.location.href = './#contact')}>
                                Contact Info
                            </button>
                        </div>
                        <div id="socials-container">
                            <img
                                src={process.env.PUBLIC_URL + '/assets/linkedin.png'}
                                alt="My LinkedIn profile"
                                className="icon"
                                onClick={() => (window.location.href = 'https://linkedin.com/in/shiva-prasad-m')}
                            />
                            <img
                                src={process.env.PUBLIC_URL + '/assets/github.png'}
                                alt="My Github profile"
                                className="icon"
                                onClick={() => (window.location.href = 'https://github.com/shivaprasadmakela')}
                            />

                            <img
                                src={process.env.PUBLIC_URL + '/assets/ytlogo.png'}
                                alt="My YouTube profile"
                                className="icon"
                                onClick={() => (window.location.href = 'https://www.youtube.com/@shivaprasad.m')}
                            />
                        </div>
                    </div>
                </section>

                <AboutMe />
                <Experiences />
                <Projects />
                <ContactForm />
            </>
        )
    }
}

export default MainProfile;
