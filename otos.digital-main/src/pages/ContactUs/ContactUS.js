import React from 'react';
import Header from '../../layout/Header/Header';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ImageTest from '../../images/undraw_contact_us_15o2.svg';
import ImageTest2 from '../../images/undraw_envelope_n8lc.svg';
import ImageTest3 from '../../images/undraw_location_tracking_46qb.svg';
import ImageTest4 from '../../images/undraw_modern_design_v3wv.svg';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

import './ContactUs.css';

export default function ContactUs() {
  return (
    <div>
      <Header headerClass="header-contact-us" />
      <Container fluid>
        <Row className="contact-image">
          <Image src={ImageTest} height={400} />
        </Row>
        <br />
        <Row>
          <Col xs={12} md={4} className="contact-card">
            <ActivityCard>
              <a href="mailto:contact@otos-lab.fr">
                <Card>
                  <Card.Img
                    variant="top"
                    src={ImageTest2}
                    width={200}
                    height={200}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      contact@otos-lab.fr
                    </Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </ActivityCard>
          </Col>
          <Col xs={12} md={4} className="contact-card">
            <ActivityCard>
              <a
                href="https://www.google.com/maps/place/22+Rue+du+R%C3%A9v%C3%A9rend+P%C3%A8re+Christian+Gilbert,+92600+Asni%C3%A8res-sur-Seine/@48.9130555,2.2864397,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66f66a1f90da3:0x6cb9c0c93f2bf6ea!8m2!3d48.913052!4d2.2886284"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={ImageTest3}
                    width={200}
                    height={200}
                  />
                  <Card.Body>
                    <Card.Title className="text-center contact-card">
                      22 rue du Révérend Père Christian Gilbert, 92600
                      Asnières-sur-Seine
                    </Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </ActivityCard>
          </Col>
          <Col xs={12} md={4} className="contact-card">
            <ActivityCard>
              <a href="tel:+336747496">
                <Card>
                  <Card.Img
                    variant="top"
                    src={ImageTest4}
                    width={200}
                    height={200}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      +33 6 74 97 97 56
                    </Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </ActivityCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
