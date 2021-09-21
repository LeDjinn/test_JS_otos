import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/Card';
import Header from '../../layout/Header/Header';
import Descriptions from '../Descriptions/Description';
import ImagesCards from '../ImagesCards/ImagesCards';
import Container from 'react-bootstrap/Container';

import './OurServices.css';

function OurServices({ title, cardName }) {
  return (
    <>
      <Header headerClass="header-ecommerce" />
      <Container>
        <Row className="text-center services">
          <Col md={{ span: '4', order: 0 }} xs={{ span: 'auto', order: 1 }}>
            <Card cardName={cardName} cardTitle={title} />
          </Col>
          <Col
            md={{ span: '4', order: 1 }}
            xs={{ span: 'auto', order: 0 }}
            className="test"
          >
            <ImagesCards title={title} />
          </Col>
          <Col md={{ span: '4', order: 2 }} xs={{ span: '12' }}></Col>
        </Row>
        <Row>
          <Col>
            <Descriptions title={title} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OurServices;
