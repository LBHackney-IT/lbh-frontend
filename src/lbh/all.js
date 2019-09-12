import GovukFrontend from 'govuk-frontend'
import BackToTop from './components/lbh-back-to-top/back-to-top'
import CookieBanner from './components/lbh-cookie-banner/cookie-banner'
import Map from './components/lbh-contact-block/contact-block'

function nodeListForEach (nodes, callback) {
  if (window.NodeList.prototype.forEach) {
    return nodes.forEach(callback)
  }
  for (var i = 0; i < nodes.length; i++) {
    callback.call(window, nodes[i], i, nodes)
  }
}

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {}

  GovukFrontend.initAll()

  // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document

  var $cookieBanner = scope.querySelector('[data-module="lbh-cookie-banner"]')
  if ($cookieBanner) {
    new CookieBanner($cookieBanner).init()
  }

  var $maps = scope.querySelectorAll('[data-module="lbh-map"]')
  nodeListForEach($maps, function ($map) {
    new Map($map).init()
  })

  var $backToTop = scope.querySelector('[data-module="lbh-back-to-top"]')
  if ($backToTop) {
    new BackToTop($backToTop).init()
  }
}

export {
  initAll,
  BackToTop,
  CookieBanner,
  Map
}
