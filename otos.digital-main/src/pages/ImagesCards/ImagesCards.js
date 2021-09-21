import React from 'react';
import Image from 'react-bootstrap/Image';
import Ecommerce from '../../images/undraw_add_to_cart_vkjp.svg';
import AppWeb from '../../images/undraw_Mobile_application_mr4r.svg';
import Vitrine from '../../images/undraw_Success_factors_re_ce93.svg';
import Blog from '../../images/undraw_fashion_blogging_w9ol.svg';
import Crm from '../../images/undraw_Data_re_80ws.svg';
import Portfolio from '../../images/undraw_portfolio_website_lidw.svg';

function ImagesCards({ title }) {
  return (
    <div className="container">
      {(() => {
        switch (title) {
          case 'Ecommerce':
            return <Image src={Ecommerce} alt="Ecommerce" fluid />;
          case 'Application Web':
            return <Image src={AppWeb} alt="AppWeb" fluid />;
          case 'Site Vitrine':
            return <Image src={Vitrine} alt="Vitrine" fluid />;
          case 'Blog':
            return <Image src={Blog} alt="Blog" fluid />;
          case 'Crm':
            return <Image src={Crm} alt="Crm" fluid />;
          case 'Portfolio':
            return <Image src={Portfolio} alt="Portfolio" fluid />;
          default:
            return <div>Vous êtes perdu ?</div>;
        }
      })()}
    </div>
  );
}

export default ImagesCards;
