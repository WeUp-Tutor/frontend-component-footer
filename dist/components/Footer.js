import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
import './footer.css';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var SiteFooter = function SiteFooter(_ref) {
  var supportedLanguages = _ref.supportedLanguages,
    onLanguageSelected = _ref.onLanguageSelected,
    logo = _ref.logo;
  var intl = useIntl();
  var _useContext = useContext(AppContext),
    config = _useContext.config;
  var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
  var externalLinkClickHandler = function externalLinkClickHandler(event) {
    var label = event.currentTarget.getAttribute('href');
    var eventName = EVENT_NAMES.FOOTER_LINK;
    var properties = {
      category: 'outbound_link',
      label: label
    };
    sendTrackEvent(eventName, properties);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper wrapper-footer"
  }, /*#__PURE__*/React.createElement("footer", {
    id: "footer",
    className: "tutor-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__logos"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://hexafret.weup.in/static/indigo/images/logo-white.png",
    alt: "Hexafret",
    className: "footer__logo footer__logo--hexafret"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://hexafret.weup.in/static/indigo/images/logo-rl_eu.png",
    alt: "Rail Logistics Europe",
    className: "footer__logo footer__logo--rle"
  })), /*#__PURE__*/React.createElement("div", {
    className: "footer__separator"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "footer__nav",
    "aria-label": "Liens l\xE9gaux"
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: "#ffffff"
    },
    href: "/tos",
    className: "footer__link"
  }, "Mentions l\xE9gales"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: "#ffffff"
    },
    href: "/privacy",
    className: "footer__link"
  }, "Politique de donn\xE9es personnelles"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }), /*#__PURE__*/React.createElement("span", {
    className: "copyright-site"
  }, "Copyrights \xA92026. All Rights Reserved.")));
};
SiteFooter.propTypes = {
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default SiteFooter;
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map