import React from 'react';
import Header from '../../layout/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Image1 from '../../images/undraw_Meeting_re_i53h.svg';
import Image2 from '../../images/undraw_static_assets_rpm6.svg';
import Image3 from '../../images/undraw_design_feedback_dexe.svg';
import Image4 from '../../images/undraw_mobile_testing_reah.svg';
import Image5 from '../../images/undraw_Success_factors_re_ce93.svg';

import './OurMethodology.css';

function Methodology() {
  return (
    <div>
      <Header headerClass="header-contact" />
      <Container fluid>
        <h1 className="text-center title">Notre méthodologie</h1>
        <Row className="align-items-center">
          <Col xs={1} md={1}>
            <h1 className="number">
              <span
                style={{
                  color: '#6226a9',
                }}
                className="number-left"
              >
                1
              </span>
            </h1>
          </Col>
          <Col xs={7} md={8}>
            <h1>Écouter et comprendre votre projet</h1>
          </Col>
          <Col xs={4} md={3}>
            <Image
              className="is-rounded level-item"
              src={Image1}
              width={200}
              height={200}
              fluid
            />
          </Col>
          <Col>
            <p className="" style={{ marginLeft: '20px', fontSize: '20px' }}>
              Écouter, comprendre et caractériser vos envies est une étape clé
              du développement de votre projet pour définir une solution web
              pertinente et adaptée à vos besoins. Suite à une première prise de
              contact/demande de devis, nous fixons une date pour un premier
              call. Lors du "jour J", un ou plusieurs experts participeront à
              cette première prise de contact pour prendre note de tous les
              détails de votre projet et vous conseiller/orienter dans vos choix
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={4} md={3}>
            <Image
              className="is-rounded level-item"
              src={Image2}
              width={200}
              height={200}
              fluid
            />
          </Col>
          <Col xs={7} md={8}>
            <h1>Choix des outils</h1>
          </Col>
          <Col xs={1} md={1}>
            <h1 className="number">
              <span
                style={{
                  color: '#F7DF1E',
                }}
                className="number-right"
              >
                2
              </span>
            </h1>
          </Col>
          <Col>
            <p className="" style={{ marginLeft: '20px', fontSize: '20px' }}>
              Suite à notre premier rendez-vous nous vous enverrons un dossier
              récapitulatif complet de votre demande. Ce dossier contiendra
              entre autres: Mise en avant des fonctionnalités nécessaires,
              Langage de programmation (PHP , Javascript, Ruby ), Frameworks
              (Ruby-on-rails, React JS), CMS (Content Management
              System) tel que WordPress, choix de l'hébergement, délais
              de livraison, prix.
              <br /> Il s'agira de répondre au mieux à vos attentes en utilisant
              les outils les plus adaptés à votre demande.
              <br /> Il ne reste plus qu'à accepter notre devis retourné et
              signé pour que l'on commence à travailler !
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={1} md={1}>
            <h1 className="number">
              <span
                style={{
                  color: '#77a9ec',
                }}
                className="number-left"
              >
                3
              </span>
            </h1>
          </Col>
          <Col xs={7} md={8}>
            <h1>Vos premiers ressentis sur la version beta</h1>
          </Col>
          <Col xs={4} md={3}>
            <Image
              className="is-rounded level-item"
              src={Image3}
              width={200}
              height={200}
              fluid
            />
          </Col>
          <Col>
            <p className="" style={{ marginLeft: '20px', fontSize: '20px' }}>
              Cette phase est très importante: la présentation de la première
              version. Votre ressenti et vos remarques seront là pour nous
              guider et affiner le produit selon votre désir! Votre projet
              commence à prendre vie, il est temps pour vous de choisir les
              chemins à prendre pour l’évolution de votre application/site web.
            </p>
          </Col>
        </Row>

        <br />
        <Row className="align-items-center">
          <Col xs={4} md={3}>
            <Image
              className="is-rounded level-item"
              src={Image4}
              width={200}
              height={200}
              fluid
            />
          </Col>
          <Col xs={7} md={8}>
            <h1>Test des fonctionalités </h1>
          </Col>
          <Col xs={1} md={1}>
            <h1 className="number">
              <span
                style={{
                  color: '#FF299C',
                }}
                className="number-right"
              >
                4
              </span>
            </h1>
          </Col>
          <Col>
            <p className="" style={{ marginLeft: '20px', fontSize: '20px' }}>
              Nos produits sont testés et contrôlés en situations réelles pour
              voir si des bugs peuvent subvenir. La sécurité est une partie
              importante et non négligeable du processus de développement. Ici
              le produit est prêt à 95%… Derniers contrôles avant décollage !
            </p>
          </Col>
        </Row>

        <br />

        <Row className="align-items-center">
          <Col xs={1} md={1}>
            <h1 className="number">
              <span
                style={{
                  color: '#048A81',
                }}
                className="number-left"
              >
                5
              </span>
            </h1>
          </Col>
          <Col xs={7} md={8}>
            <h1>Mise en production !</h1>
          </Col>
          <Col xs={4} md={3}>
            <Image
              className="ml-3"
              src={Image5}
              width={200}
              height={200}
              fluid
            />
          </Col>
          <Col>
            <p className="" style={{ marginLeft: '20px', fontSize: '20px' }}>
              3...2...1... GO ! Votre projet est enfin entré en orbite du web !
              Notre station vous souhaite une belle conquête et plein de
              réussite.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Methodology;
