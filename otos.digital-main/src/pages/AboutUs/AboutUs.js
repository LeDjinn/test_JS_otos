import React from 'react';
import Header from '../../layout/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BusinessImage from '../../images/undraw_businessman_97x4.svg';
import CodingImage from '../../images/undraw_content_team_3epn.svg';
import GrowthImage from '../../images/undraw_All_the_data_re_hh4w.svg';

import './AboutUs.css';

export default function AboutUs() {
  return (
    <div>
      <Header headerClass="header-about-us" />
      <br />
      <Container>
        <Row className="about-us-cards">
          <Col xs={12} md={6}>
            <Image height={100} src={BusinessImage} fluid />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="text-center"> Notre agence </h1>
            <br />
            Créée en 2018, l'entreprise individuelle Otos lab développe son
            activité à Asnières-sur-Seine en Ile-de-France sous la direction de
            Nizar M'rad et en collaboration avec des partenaires passionnés, de
            confiance permettant d'apporter les compétences nécessaires à
            l'aboutissement et la réussite de vos projets.
            <br />
            <br /> Aujourd'hui l'entreprise profite de son réseau et
            connaissances pour fournir un travail de qualité , et qui s'adaptera
            à votre budget ! Design, Data science, Machine Learning, SEO,
            application web et mobile, CMS, stratégie web marketing, stratégie
            d'entreprise , sont autant de compétences que l'entreprise peut
            mettre à votre disposition.
            <br />
            <br />
            Otos.lab a pour but d'aider les TPE et les PME dans:
            <br />
            <br /> - l’acquisition de nouveaux clients;
            <br />
            <br /> - le développement de leurs activités via leur image
            digitale;
            <br />
            <br /> - le développement de leur visibilité ;
            <br />
            <br />
            - le développement du chiffre d’affaire ;
            <br />
            <br /> Notre crédo vous l'aurez compris : la création de valeurs par
            le biais du digital.
          </Col>
        </Row>
        <br />
        <Row className="about-us-cards">
          <Col xs={{ span: '12', order: '0' }} md={{ span: '6', order: '1' }}>
            <Image height={100} src={CodingImage} fluid />
          </Col>
          <Col xs={{ span: '12', order: '1' }} md={{ span: '6', order: '0' }}>
            <h1 className="text-center">Travailler en décentralisé</h1>
            <br />
            Otos.lab a pour vision et fonctionnement de travailler
            essentiellement de manière décentralisée. <br /> <br /> L'idée est
            simple, il nous suffit d'une connexion internet et d'un logiciel de
            type : "microsoft teams", "slack", "discord", "facebook", "team
            viewer" etc. pour prendre contact et échanger. Vous l'aurez compris,
            nous nous adapterons à votre moyen de communication privilégié. But
            étant d'économiser votre temps et d'éventuels frais de déplacement
            et ainsi de "vivre avec son temps"!.
            <br />
            <br />
            Évidemment si cela vous est nécessaire c'est avec plaisir que nous
            vous rencontrerons !
          </Col>
        </Row>
        <br />
        <Row className="about-us-cards">
          <Col xs={12} md={6}>
            <Image height={100} src={GrowthImage} fluid />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="text-center">Nos valeurs</h1>
            <br />
            Chez Otos Lab nous sommes portés sur la culture du résultat et nous
            travaillons en étroite collaboration avec nos clients et nos
            partenaires pour trouver les solutions les plus adaptées pour leurs
            stratégies digitales. Nos valeurs issues de nos parcours
            professionnels et personnels nous mènent vers une volonté de
            digitaliser la société et de rendre accessibles aux plus grans
            nombre d'entreprises l'accessibilité à ce monde de demain. Chacun
            pouvant devenir les acteurs d'une société en quête de performances
            et d'innovations.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
