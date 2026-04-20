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
  return /*#__PURE__*/React.createElement("footer", {
    role: "contentinfo",
    className: "footer d-flex border-top py-3 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid d-flex"
  }, /*#__PURE__*/React.createElement("a", {
    className: "d-block",
    href: config.LMS_BASE_URL,
    "aria-label": intl.formatMessage(messages['footer.logo.ariaLabel']),
    onClick: externalLinkClickHandler
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      maxHeight: 45
    },
    src: logo || config.LOGO_TRADEMARK_URL,
    alt: intl.formatMessage(messages['footer.logo.altText'])
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-1"
  }), showLanguageSelector && /*#__PURE__*/React.createElement(LanguageSelector, {
    options: supportedLanguages,
    onSubmit: onLanguageSelected
  })));
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