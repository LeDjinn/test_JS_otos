import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Slide from '../Slide/Slide';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ParallaxStyled = styled.div`
  .parallax {
    height: 60vh;
    position: relative;
    overflow: hidden;
    section {
      width: 100%;
      height: auto;
      position: absolute;
      right: 0;
      background-color: #aa1a9d;
      border-radius: 10px;
      box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    }
    h1 {
      color: white;
    }
    h2 {
      padding: 5vh;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
        0px -5px 35px rgba(255, 255, 255, 0.3);
    }
  }
`;

const Parallax3 = () => (
  <ParallaxStyled>
    <Container fluid>
      <Row>
        <Col>
          <Controller>
            <Timeline
              target={
                <h1 className="text-center title-test">Et sans oublier une </h1>
              }
            >
              <Tween from={{ x: '-1000px' }} to={{ x: '0px' }} duration={20} />
            </Timeline>

            <Scene indicators={false} duration="100%" triggerHook="onEnter">
              <Timeline wrapper={<div className="parallax" />}>
                <Tween
                  position="0"
                  from={{
                    opacity: 0,
                    yPercent: -100,
                  }}
                  to={{
                    opacity: 1,
                    yPercent: 0,
                  }}
                >
                  <section style={{ height: '50vh' }}>
                    <Slide></Slide>
                  </section>
                </Tween>
                <Tween
                  position="0"
                  from={{
                    top: '80%',

                    opacity: 0,
                  }}
                  to={{
                    top: '0%',

                    opacity: 1,
                  }}
                >
                  <div className="text-center">
                    <h1 className="title is-1 has-text-centered has-text-white ">
                      Une concéption graphique unique
                    </h1>
                  </div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </Col>
      </Row>
    </Container>
  </ParallaxStyled>
);

export default Parallax3;
