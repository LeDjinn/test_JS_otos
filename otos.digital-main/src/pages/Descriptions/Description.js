import React from 'react';

function Descriptions({ title }) {
  return (
    <div className="container">
      {(() => {
        switch (title) {
          case 'Ecommerce':
            return (
              <p style={{ marginBottom: '50px', fontSize: '20px' }}>
                Notre monde change notre mode de fonctionnement n'a de cesse
                d'évoluer… Les boutiques en lignes pourront charmer de nouveaux
                clients, qui pourront se balader sur votre site, se référer ou
                donner un avis, vous posez des questions. Ce sont autant
                d'interactions qui pourront vous aider à développer votre
                activité, si elles sont bien mises en oeuvre. Une boutique en
                ligne est bien plus qu’un stand de vente, c’est un espace
                d’échange avant tout . Créons ensemble votre espace de vente de
                la meilleure façon.
              </p>
            );
          case 'Application Web':
            return (
              <p style={{ marginBottom: '50px', fontSize: '20px' }}>
                Développer une application mobile est un excellent atout pour
                une entreprise qui souhaite renforcer le rayonnement de sa
                marque et de se différencier de la concurrence. De nombreuses
                entreprises ont aujourd'hui un site dit responsif c'est-à-dire
                qui s'adapte à toute taille d'écran : mobile, tablette,
                ordinateur. Les entreprises ayant une application mobile quant à
                elles se font plus rares mais ne cessent d'augmenter. Grâce à
                une application mobile, votre marque prendra un réel tournant
                digital puisqu'elle rentrera dans le quotidien de vos
                prospects/clients.
              </p>
            );
          case 'Site Vitrine':
            return (
              <p style={{ marginBottom: '50px', fontSize: '20px' }}>
                Un site vitrine est un site internet faisant la promotion d’un
                produit, d’un service ou d’une marque. Contrairement au site
                e-commerce, le site vitrine n’est pas un site marchand, son
                objectif est de communiquer sur une offre, une entreprise, un
                service afin d’augmenter sa clientèle. La vente quant à elle se
                fera sur un autre site ou canal de distribution. Le site vitrine
                est comparable à une carte de visite digitale dans l'univers
                web. Généralement clair et relativement épuré dans un site
                vitrine les informations contenues vont droit à l’essentiel et
                ont un ton promotionnel, but étant que les internautes
                retiennent facilement votre marque et ses valeurs. Il s'agit
                donc de travailler minutieusement.
              </p>
            );
          case 'Blog':
            return (
              <p style={{ marginBottom: '50px', fontSize: '20px' }}>
                Vous êtes un média, un artiste, un passionné ou vous voulez
                réunir des gens qui partagent les mêmes intérêts que vous ? Le
                blog est la réponse adéquate pour vous. Vous pouvez créer du
                contenu, partager votre expertise ou vos travaux pour créer une
                communauté qui partage les mêmes centres d'intérêt. Vous pouvez
                suivre les interactions de votre communauté en direct et
                interagir avec elle. C’est un outil parfait pour développer et
                faire connaître vos idées. Contrairement aux réseaux sociaux
                vous êtes le maître à bord.
              </p>
            );
          case 'Crm':
            return (
              <p style={{ marginBottom: '50px', fontSize: '20px' }}>
                La gestion de la relation client (GRC), ou gestion des relations
                avec la clientèle, en anglais customer relationship management
                (CRM), est l'ensemble des outils et techniques destinés à
                capter, traiter, analyser les envies et les attentes relatives
                aux clients et aux prospects, dans le but de les fidéliser et de
                les satisfaire en leur offrant ou proposant des services. Merci
                à Wikipédia pour cette définition précise … Concrètement nous
                proposons des outils pour gérer votre flux de clientèle avec une
                interface simple et rapide d’utilisation. Toujours avec un souci
                d'efficacité nos solutions CRM seront adaptées à votre besoin.
              </p>
            );
          case 'Portfolio':
            return (
              <p style={{ marginBottom: '50px', fontSize: '20px' }}>
                Créateurs de mode, photographe dessinateur, musicien etc.… Vous
                voulez un espace où vos travaux sont réunis et mis en valeur ?
                Nous vous proposons de créer un portfolio qui a de la classe ,
                qui vous ressemble, pour vous permettre de partager votre
                univers avec le public. Vous pourrez disposer à poster vos
                travaux graphiques ou autres ( statiques, machin learning,
                ingénierie etc.) Présentez-vous au monde de la meilleure façon,
                celle qui vous correspond.
              </p>
            );
          default:
            return <div>You are lost.</div>;
        }
      })()}
    </div>
  );
}

export default Descriptions;
