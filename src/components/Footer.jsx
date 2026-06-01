import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';

import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};



const footerCss = `
  .wrapper-footer {
    background-color: #1C5659 !important;
    color: white;
    padding: 25px 10px 30px 10px !important;
    font-family: "Barlow";
  }

  body {
    font-family: "Barlow";
  }
  body.view-in-course .wrapper-footer {
    background-color: gray;
  }

  .wrapper-footer .site-nav,
  .wrapper-footer footer#footer-openedx .colophon .nav-colophon {
    margin: 0 !important;
  }

  .wrapper-footer .site-nav .nav-link,
  .wrapper-footer footer#footer-openedx .colophon .nav-colophon li a {
    color: white !important;
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-nav > .nav-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 10vw !important;
    width: calc(100% - 20vw);
  }

  .navbar-nav > .nav-item > a {
    color: white !important;
  }

  @media (min-width: 768px) {
    .col-md-9 {
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
  }
`;



const SiteFooter = ({
  supportedLanguages,
  onLanguageSelected,
  logo,
}) => {
  const intl = useIntl();
  const { config } = useContext(AppContext);

  const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;

  const externalLinkClickHandler = (event) => {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  };

  return (
    <>
      <style>{footerCss}</style>

      <footer className="wrapper-footer">
        <nav className="site-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="https://tutor-cyril.weup.in/tos" className="nav-link" onClick={externalLinkClickHandler}>
                Mentions légales
              </a>
              <a href="https://tutor-cyril.weup.in/privacy" className="nav-link" onClick={externalLinkClickHandler}>
                Politique de confidentialité
              </a>
              <a href="https://tutor-cyril.weup.in/honor" className="nav-link" onClick={externalLinkClickHandler}>
                Crédits
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

SiteFooter.propTypes = {
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default SiteFooter;
export { EVENT_NAMES };
