import { useState } from 'react';
import './sidebar.styles.css';

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src="logo.png" alt="chaabi-logo" />
            </div>
            <div className='buttons'>
                <a
                    className={activeLink === 'home' ? 'active' : ''}
                    href="#dashboard"
                    onClick={() => handleLinkClick('home')}
                >
                    Dashboard
                </a>
                <a
                    className={activeLink === 'trainings' ? 'active' : ''}
                    href="#trainings"
                    onClick={() => handleLinkClick('trainings')}
                >
                    Trainings
                </a>
                <a
                    className={activeLink === 'users' ? 'active' : ''}
                    href="#users"
                    onClick={() => handleLinkClick('users')}
                >
                    Users
                </a>
                <a
                    className={activeLink === 'analytics' ? 'active' : ''}
                    href="#analytics"
                    onClick={() => handleLinkClick('analytics')}
                >
                    Analytics
                </a>
                <a
                    className={activeLink === 'myaccount' ? 'active' : ''}
                    href="#myaccount"
                    onClick={() => handleLinkClick('myaccount')}
                >
                    My Account
                </a>
                <a
                    className={activeLink === 'support' ? 'active' : ''}
                    href="#support"
                    onClick={() => handleLinkClick('support')}
                >
                    Support
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
