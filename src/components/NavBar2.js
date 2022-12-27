import SocialButton from './SocialButton';
import socials from '../data/socials.json';
import {useContext} from 'react';
import toggleDarkMode from '../features/dark-mode';
import {Link} from 'react-router-dom';

export default function NavBar() {
    const [darkMode, setDarkMode] = useContext(toggleDarkMode);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/">
                        <img className="navbar-logo" src="/logo.png" />
                    </Link>
                </div>
                <div className="navbar-right">
                    <Link to="/about">
                        <div className="navbar-link">About</div>
                    </Link>
                    <Link to="/projects">
                        <div className="navbar-link">Projects</div>
                    </Link>
                    <Link to="/experience">
                        <div className="navbar-link">Experience</div>
                    </Link>
                    <div className="navbar-link" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </div>
                    <SocialButton link={socials.linkedin} icon="/linkedin.png" />
                    <SocialButton link={socials.github} icon="/github.png" />
                    <SocialButton link={"mailto:"+socials.gmail} icon="/mail.png" />
                </div>
            </div>
        </div>
    );
}