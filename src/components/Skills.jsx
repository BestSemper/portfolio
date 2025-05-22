import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import python_logo from "../assets/img/python_logo.svg";
import java_logo from "../assets/img/java_logo.svg";
import cpp_logo from "../assets/img/cpp_logo.svg";
import html_logo from "../assets/img/html_logo.svg";
import css_logo from "../assets/img/css_logo.svg";
import javascript_logo from "../assets/img/javascript_logo.svg";
import git_logo from "../assets/img/git_logo.svg";
import react_logo from "../assets/img/react_logo.svg";
import django_logo from "../assets/img/django_logo.svg";
import nodejs_logo from "../assets/img/nodejs_logo.svg";

export const Skills = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const skillList1 = [
        { icon: python_logo, name: "Python", level: 10 },
        { icon: cpp_logo, name: "C++", level: 5 },
        { icon: css_logo, name: "CSS", level: 9 },
        { icon: git_logo, name: "Git", level: 7 },
        { icon: django_logo, name: "Django", level: 5 },
    ];
    const skillList2 = [
        { icon: java_logo, name: "Java", level: 7 },
        { icon: html_logo, name: "HTML", level: 9 },
        { icon: javascript_logo, name: "Javascript", level: 7 },
        { icon: react_logo, name: "React", level: 8 },
        { icon: nodejs_logo, name: "NodeJS", level: 8 },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <Row className="align-items-center">
                        <Col xs={12} lg={6}>
                            <div className="skills-grid">
                                {skillList1.map((skill, idx) => (
                                    <div key={idx} className="item">
                                        <img src={skill.icon} />
                                        <h5>{skill.name}</h5>
                                        {Array.from({ length: 10 }, (_, i) => (
                                            <div className={`level ${i < skill.level ? 'filled' : ''}`} />
                                        ))}
                                        <div className="end"/>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="skills-grid">
                                {skillList2.map((skill, idx) => (
                                    <div key={idx} className="item">
                                        <img src={skill.icon} />
                                        <h5>{skill.name}</h5>
                                        {Array.from({ length: 10 }, (_, i) => (
                                            <div className={`level ${i < skill.level ? 'filled' : ''}`} />
                                        ))}
                                        <div className="end"/>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}