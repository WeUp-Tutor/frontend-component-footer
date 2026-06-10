import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';

import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
import './footer.css'
ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

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
    <div className="wrapper wrapper-footer">
      <footer id="footer" className="tutor-container">
        <div className="footer__inner">
          <div className="footer__logos">
            <img
              src="https://hexafret.weup.in/static/indigo/images/logo-white.png"
              alt="Hexafret"
              className="footer__logo footer__logo--hexafret"
            />

            <img
              src="https://hexafret.weup.in/static/indigo/images/logo-rl_eu.png"
              alt="Rail Logistics Europe"
              className="footer__logo footer__logo--rle"
            />
          </div>

          <div className="footer__separator" />

          <nav className="footer__nav" aria-label="Liens légaux">
            <a
              style={{ color: "#ffffff" }}
              href="/tos"
              className="footer__link"
            >
              Mentions légales
            </a>

            <a
              style={{ color: "#ffffff" }}
              href="/privacy"
              className="footer__link"
            >
              Politique de données personnelles
            </a>
          </nav>
        </div>



        <div className="footer-top">

        </div>

        <span className="copyright-site">
          Copyrights ©2026. All Rights Reserved.
        </span>


      </footer>
    </div>
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
