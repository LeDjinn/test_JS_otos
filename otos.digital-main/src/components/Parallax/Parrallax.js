import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
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

      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    }
    h1 {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 25%;
      color: white;
      font-size: 20px;
      text-align: justify;
    }
    h1.left {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 25%;
    }
    @media screen and (max-width: 768px) {
      h1 {
        display: none;
      }
    }
  }
`;

const Parallax = () => (
  <ParallaxStyled>
    <Container fluid>
      <Row>
        <Col>
          <Controller>
            {/* <div className="section" /> */}

            <Timeline
              target={<h1 className="text-center title-test">Ou encore</h1>}
            >
              <Tween from={{ x: '-1000px' }} to={{ x: '0px' }} duration={7} />
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
                    <h1 className="">
                      Rebellious subjects, enemies to peace, Profaners of this
                      neighbour-stained steel,-- Will they not hear? What, ho!
                      you men, you beasts, That quench the fire of your
                      pernicious rage With purple fountains issuing from your
                      veins, On pain of torture, from those bloody hands Throw
                      your mistemper'd weapons to the ground, And hear the
                      sentence of your moved prince.{' '}
                      <span style={{ opacity: '0.6' }}>
                        Three civil brawls, bred of an airy word, By thee, old
                        Capulet, and Montague, Have thrice disturb'd the quiet
                        of our streets, And made Verona's ancient citizens Cast
                        by their grave beseeming ornaments, To wield old
                        partisans, in hands as old, Canker'd with peace, to part
                        your canker'd hate: If ever you disturb our streets
                        again, Your lives shall pay the forfeit of the peace.
                      </span>
                      <span style={{ opacity: '0.3' }}>
                        {' '}
                        For this time, all the rest depart away: You Capulet;
                        shall go along with me: And, Montague, come you this
                        afternoon, To know our further pleasure in this case, To
                        old Free-town, our common judgment-place. Once more, on
                        pain of death, all men depart.
                      </span>
                    </h1>
                    <h1 className="left">
                      <span style={{ opacity: '0.3' }}>
                        Rebellious subjects, enemies to peace, Profaners of this
                        neighbour-stained steel,-- Will they not hear? What, ho!
                        you men, you beasts, That quench the fire of your
                        pernicious rage With purple fountains issuing from your
                        veins, On pain of torture, from those bloody hands Throw
                        your mistemper'd weapons to the ground, And hear the
                        sentence of your moved prince.
                      </span>{' '}
                      <span style={{ opacity: '0.5' }}>
                        Three civil brawls, bred of an airy word, By thee, old
                        Capulet, and Montague, Have thrice disturb'd the quiet
                        of our streets, And made Verona's ancient citizens Cast
                        by their grave beseeming ornaments, To wield old
                        partisans, in hands as old, Canker'd with peace, to part
                        your canker'd hate: If ever you disturb our streets
                        again, Your lives shall pay the forfeit of the peace.{' '}
                      </span>
                      For this time, all the rest depart away: You Capulet;
                      shall go along with me: And, Montague, come you this
                      afternoon, To know our further pleasure in this case, To
                      old Free-town, our common judgment-place. Once more, on
                      pain of death, all men depart.
                    </h1>
                  </section>
                </Tween>
                <Tween
                  position="0"
                  from={{
                    top: '10%',
                    opacity: 0,
                    y: 100,
                  }}
                  to={{
                    top: '0%',
                    opacity: 1,
                    y: 0,
                  }}
                >
                  <div className="text-center" style={{ color: 'white' }}>
                    <h2>Rédaction de contenu</h2>
                    <h3>spécifique et attractif pour votre besoin</h3>
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

export default Parallax;
