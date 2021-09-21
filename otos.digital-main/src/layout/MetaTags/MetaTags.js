import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function MetaTags() {
  const location = useLocation();
  const path = location.pathname;

  const checkUri = (uri) => {
    switch (uri) {
      case '/accueil':
        return {
          title: `Otos-Lab créateur d'application web et mobile.`,
          description: ` Créations rapides de sites web et utilisation du Machine Learning pour vos  projets. Site web clefs en main.`,
          keywords: `Site web , 
          Machine Learning , 
          analyses de vos Datas, 
          Optimisations des performances gràce au Machine Leartning . 
          e-commerce
          SEO`,
        };
      case '/services/site-vitrine':
        return {
          title: `Le facteur numéro 1 de votre réussite :Le site web`,
          description:
            'Gagner en visibilté et faite vous connaitre partout dans le monde , tout en gardant une proximité avec vos clients',
          keywords: `Site Vitrine, France, Responsive`,
        };
      case '/services/e-commerce':
        return {
          title: `Comment créer une boutique en ligne moderne ?`,
          description: `Les boutiques en ligne peuvent doubler votre chiffre d'affaire.`,
          keywords: `e-commerce, e-shop, boutiques en ligne, vente en ligne`,
        };
      case '/services/application-web':
        return {
          title: `3 facteurs qui augmentent le taux de visites  sur votre site web`,
          description: `Aujourd'hui Plus de 60 % des utilisateurs utilisent leurs mobiles pour naviguer sur le web`,
          keywords: `Application Mobile`,
        };
      case '/services/blog':
        return {
          title: `Créez un blog qui vous ressemble`,
          description:
            'Avoir un blog facile à gérer, avec du contenu dynamique',
          keywords: `blog`,
        };
      case '/services/crm':
        return {
          title: `Le saviez-vous ? Les clients grâces à internet ont leurs mots à dire sur tout ce qu'ils achètent !`,
          description:
            'Développez rapidement votre relation client  avec un CRM sur mesure pour répondre au mieux à vos besoins ',
          keywords: `crm`,
        };
      case '/services/portfolio':
        return {
          title: `3 preuves que le Portfolio en ligne est efficace`,
          description:
            'Des portfolio qui permettent de mieux connaître votre identité artistique, et qui augmenteront votre visibilité',
          keywords: `portfolio`,
        };
      case '/methodologie':
        return {
          title: '5 Étapes pour réussir une application web',
          description: `Grâce à notre sens de l'écoute , de notre soucis de vous satisfaire,   et de votre collaboration, ensemble nous réalisons la solution web de vos rêves!`,
          keywords: `notre méthodologie`,
        };

      case '/notre-adn':
        return {
          title: 'Une entreprise portée sur la culure du résultat',
          description: `Chez Otos Lab nous travaillions en étroite collaboration avec nos clients et nos partenaires pour trouver les solutions les plus adaptés à leurs besoins`,
          keywords: `Otos-Lab`,
        };
      case '/nous-contacter':
        return {
          title:
            "Des questions ? Envie d'en savoir plus ? N'hésitez pas à nous contacter !",
          description: `Besoin d'une application mobile ? d'un site web ? De peaufiner votre stratégie digitale ?  ou encore de faire du Machine Learning ? Contactez-nous!`,
          keywords: `Contactez-nous`,
        };
      case '/mentions-legales':
        return {
          title:
            'Vous voulez en savoir plus sur notre politique de confidentilité ? ',
          description: `Tout savoir sur nos mentions légales et notre politique de confidentialité ? N'hésitez pas à lire notre document ci-joint.`,
          keywords: `Mentions légales`,
        };
      default:
        return null;
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={checkUri(path).description} />
        <meta name="keywords" content={checkUri(path).keywords} />

        <title name="title">{checkUri(path).title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
