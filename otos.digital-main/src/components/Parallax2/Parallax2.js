import React, { useState } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Parallax2.css";

const ParallaxStyled = styled.div`
  .parallax {
    height: 60vh;
    position: relative;
    overflow: hidden;
    section {
      width: 100%;
      height: auto;
      position: absolute;

      background: linear-gradient(
        -90deg,
        #654f6fff,
        #5c5d8dff,
        #99a1a6ff,
        #a8c69fff,
        #cce2a3ff
      );
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
      color: white;
    }
    h2 {
      padding: 5vh;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
        0px -5px 35px rgba(255, 255, 255, 0.3);
    }
  }
`;
const words = ["Unique", "Engageante", "Accessible"];
const colors = ["blue", "red", "yellow"];

const Parallax2 = () => {
  const [count, setCount] = useState(0);

  return (
    <ParallaxStyled>
      <Container fluid>
        <Row>
          <Col>
            <Controller>
              {/* <div className="section" /> */}

            <Timeline
              target={
                <h1 className="text-center title-test">Pour </h1>
              }
            >
              <Tween from={{ x: "-1000px" }} to={{ x: "0px" }} duration={15} />
              
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
                    <section style={{ height: "50vh" }}></section>
                  </Tween>
                  <Tween
                    position="0"
                    from={{
                      top: "10%",
                      opacity: 0,
                      y: 100,
                    }}
                    to={{
                      top: "0%",
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    <div className="text-center">
                      <h1 className="title">
                        Une expérience utilisateur <br></br>
                        <span style={{ color: colors[count] }}>
                          {words[count]}
                        </span>
                      </h1>
                      <div className="has-text-centered">
                        <button
                          className="btn"
                          onClick={() => setCount((count) => (count + 1) % 3)}
                        >
                          <strong>Touchez</strong>
                        </button>
                      </div>
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
};

export default Parallax2;
