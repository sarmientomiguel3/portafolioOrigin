import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import FOTO1 from "./foto3.jpg";
import FOTO2 from "./foto4.jpg";
import FOTO3 from "./foto5.jpg";

const Projects = () => {

  const skills = [
    {
      "name":"Python",
      "level":"40%"
    },
    {
      "name":"NodeJs",
      "level":"50%"
    },
    {
      "name":"ReactJs",
      "level":"50%"
    },
    {
      "name":"CSS",
      "level":"90%"
    },
    {
      "name":"PHP",
      "level":"80%"
    },
    {
      "name":"C#",
      "level":"80%"
    },
    {
      "name":"JAVA",
      "level":"80%"
    }
  ];

  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  const fotos = [FOTO1, FOTO2, FOTO3];
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Proyectos" />
          {projects.map((project) => {
            const i = 0;
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Proyectos'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        
        <div className="row skill">
        <Row><Col lg={12} sm={12}><Title title="Skills" /></Col></Row>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Container>
        <Row>
              
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <Col lg={6} sm={4} md={4}>

                  <h3 className="project-wrapper__text-title">Python    40%</h3>
                  </Col>
                  <Col lg={6} sm={4} md={4}>

                  <h3 className="project-wrapper__text-title">NodeJS   50%</h3>
                  </Col>

                  <Col lg={6} sm={4} md={4}>

                  <h3 className="project-wrapper__text-title"> ReactJS   50%</h3>
                  </Col>

                  <Col lg={6} sm={12} md={4}>

                  <h3 className="project-wrapper__text-title">CSS    90%</h3>
                  </Col>

                  <Col lg={6} sm={12} md={4}>

                  <h3 className="project-wrapper__text-title">PHP       80%</h3>
                  </Col>

                  <Col lg={6} sm={12} md={4}>

                  <h3 className="project-wrapper__text-title">   C#      80%</h3>
                  </Col>

                  <Col lg={6} sm={12}md={4}>

                  <h3 className="project-wrapper__text-title">  JAVA      80%</h3>
                  </Col>

              </Fade>
          
          </Row>
        </Container>
            
        </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
