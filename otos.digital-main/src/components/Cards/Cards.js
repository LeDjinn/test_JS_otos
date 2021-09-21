import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
// import Card from '../Card/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import './Cards.css';

const Card = lazy(() => import('../Card/Card'));
const Container = lazy(() => import('react-bootstrap/Container'));
const Row = lazy(() => import('react-bootstrap/Row'));
const Col = lazy(() => import('react-bootstrap/Col'));

export default function index() {
  return (
    <Container fluid>
      <h1 className="text-center title" style={{ padding: '2vh' }}>
        Du sur-mesure digital pour que vos idées prennent vie:
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Row className="cards">
          <Col xs={12} md={2}></Col>

          <Col xs="auto" md={3} className="test">
            <Link to="services/e-commerce">
              <Card cardName="card1" cardTitle="E-commerce" />
            </Link>
          </Col>

          <Col xs="auto" md={3} className="test">
            <Link to="services/application-web">
              <Card cardName="card2" cardTitle="Application Web" />
            </Link>
          </Col>
          <Col xs="auto" md={3} className="test">
            <Link to="services/site-vitrine">
              <Card cardName="card3" cardTitle="Site Vitrine" />
            </Link>
          </Col>
          <Col xs={12} md={1}></Col>
        </Row>

        <Row className="cards">
          <Col xs={12} md={2}></Col>

          <Col xs="auto" md={3} className="test">
            <Link to="services/blog">
              <Card cardName="card4" cardTitle="Blog" />
            </Link>
          </Col>

          <Col xs="auto" md={3} className="test">
            <Link to="services/crm">
              <Card cardName="card5" cardTitle="CRM" />
            </Link>
          </Col>

          <Col xs="auto" md={3} className="test">
            <Link to="services/portfolio">
              <Card cardName="card6" cardTitle="Portfolio" />
            </Link>
          </Col>

          <Col xs={12} md={1}></Col>
        </Row>
      </Suspense>
      <br></br>
    </Container>
  );
}
