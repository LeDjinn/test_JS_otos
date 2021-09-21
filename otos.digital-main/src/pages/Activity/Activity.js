import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import imgWeb from '../../images/undraw_building_websites_i78t.svg';
import imgDesign from '../../images/undraw_Mobile_application_mr4r.svg';
import imgSolution from '../../images/undraw_data_report_bi6l.svg';

import ActivityCard from '../../components/ActivityCard/ActivityCard';

import './Activity.css';

function Activity() {
  return (
    <Container className="tiesto" fluid>
      <h1 className="text-center title-test">Nous savons faire :</h1>
      <Row className="card-position">
        <Col xs={12} md={4}>
          <ActivityCard>
            <Image
              src={imgWeb}
              width={128}
              height={128}
              alt='Sites web'
              rounded
              className="mx-auto d-block floating"
            />
            <h1 className="text-center title2">Sites web</h1>
          </ActivityCard>
        </Col>

        <Col xs={12} md={4}>
          <ActivityCard>
            <Image
              src={imgDesign}
              width={128}
              height={128}
              alt='Applications mobiles'
              rounded
              className="mx-auto d-block floating"
            />
            <h1 className="text-center title2">Applications mobiles</h1>
          </ActivityCard>
        </Col>

        <Col xs={12} md={4}>
          <ActivityCard>
            <Image
              src={imgSolution}
              width={128}
              height={128}
              alt='Data Science'
              rounded
              className="mx-auto d-block floating"
            />
            <h1 className="text-center title2">Data Science</h1>
          </ActivityCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Activity;
