import GovukFrontend from "govuk-frontend";
import Accordion from "./components/lbh-accordion/accordion";
import BackToTop from "./components/lbh-back-to-top/back-to-top";
import Button from "./components/lbh-button/button";
import CharacterCount from "./components/lbh-character-count/character-count";
import Checkboxes from "./components/lbh-checkboxes/checkboxes";
import CookieBanner from "./components/lbh-cookie-banner/cookie-banner";
import Details from "./components/lbh-details/details";
import ErrorSummary from "./components/lbh-error-summary/error-summary";
import Map from "./components/lbh-contact-block/contact-block";
import Radios from "./components/lbh-radios/radios";
import Tabs from "./components/lbh-tabs/tabs";
import Collapsible from "./components/lbh-collapsible/collapsible";

function nodeListForEach(nodes, callback) {
  if (window.NodeList.prototype.forEach) {
    return nodes.forEach(callback);
  }
  for (var i = 0; i < nodes.length; i++) {
    callback.call(window, nodes[i], i, nodes);
  }
}

function initAll(options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== "undefined" ? options : {};

  GovukFrontend.initAll();

  // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== "undefined" ? options.scope : document;

  var $cookieBanner = scope.querySelector('[data-module="lbh-cookie-banner"]');
  if ($cookieBanner) {
    new CookieBanner($cookieBanner).init();
  }

  var $maps = scope.querySelectorAll('[data-module="lbh-map"]');
  nodeListForEach($maps, function ($map) {
    new Map($map).init();
  });

  var $backToTop = scope.querySelector('[data-module="lbh-back-to-top"]');
  if ($backToTop) {
    new BackToTop($backToTop).init();
  }

  const $collapsibles = scope.querySelectorAll(
    '[data-module="lbh-collapsible"]'
  );
  nodeListForEach($collapsibles, function ($collapsible) {
    new Collapsible($collapsible).init();
  });
}

export {
  initAll,
  Accordion,
  BackToTop,
  Button,
  CharacterCount,
  Checkboxes,
  CookieBanner,
  Details,
  ErrorSummary,
  Map,
  Radios,
  Tabs,
  Collapsible,
};
