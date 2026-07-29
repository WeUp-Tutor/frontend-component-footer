import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var footerCss = "\n  .wrapper-footer {\n    background-color: #1C5659 !important;\n    color: white;\n    padding: 25px 10px 30px 10px !important;\n    font-family: \"Barlow\";\n  }\n  body {\n    font-family: \"Barlow\";\n  }\n  body.view-in-course .wrapper-footer {\n    background-color: gray;\n  }\n  .wrapper-footer .site-nav, .wrapper-footer footer#footer-openedx .colophon .nav-colophon {\n    margin: 0 !important;\n  }\n  .wrapper-footer .site-nav .nav-link, .wrapper-footer footer#footer-openedx .colophon .nav-colophon li a {\n    color: white !important;\n    font-size: medium !important;\n  }\n  .navbar-nav {\n    width: 100%;\n  }\n  .navbar-nav > .nav-item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 10vw !important;\n    width: calc(100% - 20vw);\n  }\n  .navbar-nav > .nav-item > a {\n    color: white !important;\n  }\n  .theme-toggle-button {\n    display: none;\n  }\n";
var SiteFooter = function SiteFooter(_ref) {
  var supportedLanguages = _ref.supportedLanguages,
    onLanguageSelected = _ref.onLanguageSelected,
    logo = _ref.logo;
  var intl = useIntl();
  var _useContext = useContext(AppContext),
    config = _useContext.config;
  useEffect(function () {
    // Ne pas afficher le bandeau si ce composant est rendu à l'intérieur d'une iframe
    // (cas des pages de cours, où le footer est aussi rendu dans l'iframe "unit")
    var isTopWindow;
    try {
      isTopWindow = window.top === window.self;
    } catch (e) {
      // Accès bloqué (iframe cross-origin) => on considère qu'on N'EST PAS dans la fenêtre top
      isTopWindow = false;
    }
    if (!isTopWindow) {
      return;
    }
    if (window.tarteaucitron) {
      return;
    }
    var script = document.createElement('script');
    // Si le footer est rendu dans un MFE servi sur apps.*, URL relative OK :
    script.src = '/custom-theme-js/tarteaucitron.js';
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.onload = function () {
      if (!window.tarteaucitron) return;
      window.tarteaucitron.init({
        privacyUrl: 'https://tutor-cyril.weup.in/tos',
        orientation: 'bottom',
        groupServices: true,
        showAlertSmall: false,
        cookieslist: true,
        mandatory: true,
        highPrivacy: true,
        useExternalCss: false,
        useExternalJs: false
      });
      (window.tarteaucitron.job = window.tarteaucitron.job || []).push('youtube');
    };
    document.head.appendChild(script);
  }, []);
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, footerCss), /*#__PURE__*/React.createElement("footer", {
    className: "wrapper-footer"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://tutor-cyril.weup.in/tos",
    className: "nav-link",
    onClick: externalLinkClickHandler
  }, "Mentions l\xE9gales"), /*#__PURE__*/React.createElement("a", {
    href: "https://tutor-cyril.weup.in/privacy",
    className: "nav-link",
    onClick: externalLinkClickHandler
  }, "Politique de confidentialit\xE9"), /*#__PURE__*/React.createElement("a", {
    href: "https://tutor-cyril.weup.in/honor",
    className: "nav-link",
    onClick: externalLinkClickHandler
  }, "Cr\xE9dits"))))));
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