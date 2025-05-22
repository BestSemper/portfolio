import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImage from '../assets/img/header-image.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'AI Researcher'];
    const [text, setText] = useState('');
    const [typingSpeed, setTypingSpeed] = useState(300);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, typingSpeed);
        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(100);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(300);
        }
    }

    return (
        <section id="banner" className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Hi, I'm <span className="gradient">John</span></h1>
                        <h3>I'm a <span className="wrap gradient">{text}</span></h3>
                        <br/>
                        <span className="greeting">Welcome to My Portfolio</span>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="Header Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}