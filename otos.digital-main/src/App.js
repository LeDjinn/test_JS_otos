import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from 'react-cookie-consent';
import { initGA } from './components/GoogleAnalytics/GoogleAnalytics';
import Footer from './layout/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import LoaderComponent from './components/Loader/Loader';

import './App.css';

const Home = React.lazy(() => import('./pages/Home/Home'));
const OurMethodology = React.lazy(() =>
  import('./pages/OurMethodology/OurMethodology')
);
const OurServices = React.lazy(() => import('./pages/OurServices/OurServices'));
const AboutUs = React.lazy(() => import('./pages/AboutUs/AboutUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs/ContactUS'));
const TermsAndConditions = React.lazy(() =>
  import('./pages/TermsAndConditions/TermsAndConditions')
);

export default function App() {
  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };

  const handleDeclineCookie = () => {
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);
  return (
    <React.Fragment>
      <Router>
        <React.Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Router>
              <Route path="/accueil" exact component={Home} />
              <Route
                path="/services/e-commerce"
                render={(props) => (
                  <OurServices {...props} title="Ecommerce" cardName="card1" />
                )}
              />
              <Route
                path="/services/application-web"
                render={(props) => (
                  <OurServices
                    {...props}
                    title="Application Web"
                    cardName="card2"
                  />
                )}
              />
              <Route
                path="/services/site-vitrine"
                render={(props) => (
                  <OurServices
                    {...props}
                    title="Site Vitrine"
                    cardName="card3"
                  />
                )}
              />
              <Route
                path="/services/blog"
                render={(props) => (
                  <OurServices {...props} title="Blog" cardName="card4" />
                )}
              />
              <Route
                path="/services/portfolio"
                render={(props) => (
                  <OurServices {...props} title="Portfolio" cardName="card5" />
                )}
              />
              <Route
                path="/services/crm"
                render={(props) => (
                  <OurServices {...props} title="Crm" cardName="card6" />
                )}
              />
              <Route path="/methodologie" exact component={OurMethodology} />
              <Route path="/notre-adn" exact component={AboutUs} />
              <Route path="/nous-contacter" exact component={ContactUs} />
              <Route path="/mentions-legales" component={TermsAndConditions} />
              <Route exact path="/">
                <Redirect to="/accueil" />
              </Route>
            </Router>
          </Switch>
          <CookieConsent
            enableDeclineButton
            buttonText="J'accepte"
            declineButtonText="Je refuse"
            onAccept={handleAcceptCookie}
            onDecline={handleDeclineCookie}
            style={{ background: '#6226a9' }}
            buttonStyle={{ color: '#FFFF', background: '#0B6623' }}
            declineButtonStyle={{ background: '#A40600', color: 'white' }}
          >
            En poursuivant votre navigation sur ce site, vous acceptez
            l'utilisation de cookies.{' '}
            <a
              href="/mentions-legales"
              rel="noopener noreferrer"
              target="_blank"
            >
              En savoir plus
            </a>
          </CookieConsent>
          <Footer />
          <ScrollToTop />
        </React.Suspense>
      </Router>
    </React.Fragment>
  );
}
