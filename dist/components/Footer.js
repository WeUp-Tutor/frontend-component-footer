import React, { useContext } from 'react';
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
  }, "Politique de donn\xE9es personnelles"))), /*#__PURE__*/React.createElement("style", null, "\n          #footer,\n          .wrapper-footer {\n            background-color: #283940 !important;\n            color: #ffffff !important;\n            padding: 40px 24px 36px;\n            font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n          }\n\n          #footer * {\n            color: #ffffff !important;\n            font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n          }\n\n          .footer__inner {\n            max-width: 1130px;\n            margin: 0 auto;\n          }\n\n          .footer__logos {\n            display: flex;\n            justify-content: flex-end;\n            align-items: center;\n            gap: 32px;\n            margin-bottom: 38px;\n          }\n\n          .footer__logo {\n            display: block;\n            height: auto;\n            object-fit: contain;\n          }\n\n          .footer__logo--hexafret {\n            width: 170px;\n          }\n\n          .footer__logo--rle {\n            width: 110px;\n          }\n\n          .footer__separator {\n            width: 100%;\n            height: 1px;\n            background: rgba(255, 255, 255, 0.9) !important;\n            margin-bottom: 22px;\n          }\n\n          .footer__nav {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            gap: 120px;\n          }\n\n          .footer__link {\n            color: #ffffff;\n            text-decoration: none;\n            font-size: 18px;\n            line-height: 1.4;\n            font-weight: 400;\n          }\n\n          .powered-area *,\n          .copyright-site {\n            color: #ffffff !important;\n          }\n\n          .footer__link:hover,\n          .footer__link:focus {\n            text-decoration: underline;\n          }\n\n          @media (max-width: 768px) {\n            .footer {\n              padding: 32px 20px;\n            }\n\n            .footer__logos {\n              justify-content: center;\n              gap: 24px;\n              margin-bottom: 30px;\n            }\n\n            .footer__logo--hexafret {\n              width: 145px;\n            }\n\n            .footer__logo--rle {\n              width: 95px;\n            }\n\n            .footer__nav {\n              flex-direction: column;\n              gap: 14px;\n            }\n\n            .footer__link {\n              font-size: 16px;\n              text-align: center;\n            }\n          }\n        "), /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "powered-area"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "logo-list"
  }, /*#__PURE__*/React.createElement("li", null, "Powered by:"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://edly.io/tutor/",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://hexafret.weup.in/static/indigo/images/tutor-logo.png",
    alt: "Runs on Tutor",
    width: "80"
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://open.edx.org",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://hexafret.weup.in/static/indigo/images/openedx-logo.png",
    alt: "Propuls\xE9 par Open edX",
    width: "79"
  })))))), /*#__PURE__*/React.createElement("span", {
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