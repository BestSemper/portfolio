import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useMediaQuery } from "react-responsive";
import linkedIn_logo from '../assets/img/linkedIn_logo.svg';
import github_logo from '../assets/img/github_logo.svg';
import instagram_logo from '../assets/img/instagram_logo.svg';
import moon from '../assets/img/moon.svg';
import sun from '../assets/img/sun.svg';

export const CustomNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('isDark')
        return saved !== null ? JSON.parse(saved) : true
    })
    
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSystemDark) => setIsDark(isSystemDark)
    );

    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDark))
    }, [isDark])

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]); 

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="/">
                    <svg class="logo" viewBox="-20 -10 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
\                       <circle class="dot" cx="20.5" cy="15" r="2.5" fill="white"/>
                        <path
                            d="M20.5 26V53C19.5 62.6666 15.1 81.1 5.49997 77.5C-6.50003 73 14.1347 46.4999 30.5673 44C30.5673 44 30.5 36 31.5 31C32.5 26 41.9 2 35.5 2C29.1 2 30.5673 16.5 30.5673 31C30.601 31.5 30 47 30 52C30 56.7434 37 20 45.5 23C50 26 42.5 34 37 36.5C38.5 47 46 61.6 52 44"
                        />
                        <path 
                            class="stroke" 
                            d="M20.5 26V53C19.5 62.6666 15.1 81.1 5.49997 77.5C-6.50003 73 14.1347 46.4999 30.5673 44C30.5673 44 30.5 36 31.5 31C32.5 26 41.9 2 35.5 2C29.1 2 30.5673 16.5 30.5673 31C30.601 31.5 30 47 30 52C30 56.7434 37 20 45.5 23C50 26 42.5 34 37 36.5C38.5 47 46 61.6 52 44"
                            stroke-width="2.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/john-kim-190a89334/" target="_blank"><img src={linkedIn_logo} alt="linkedIn_logo"/></a>
                            <a href="https://github.com/BestSemper" target="_blank"><img src={github_logo} alt="github_logo"/></a>
                            <a href="https://www.instagram.com/john.k_16/" target="_blank"><img src={instagram_logo} alt="instagram_logo"/></a>
                        </div>
                        <label className={`toggle ${isDark ? 'dark' : ''}`} onClick={() => setIsDark(!isDark)}>
                            <div className="notch">
                                <img src={isDark ? moon : sun} alt="toggle" />
                            </div>
                        </label>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}