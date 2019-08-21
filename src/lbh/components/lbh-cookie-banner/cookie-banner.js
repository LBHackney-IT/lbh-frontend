var COOKIE_NAME = 'seen_cookie_message'

// Set to false to allow testing so that the cookie is never set
var DROP_COOKIE = window.dropCookie === undefined ? true : window.dropCookie

function CookieBanner ($module) {
  this.$module = $module
  this.$button = this.$module.querySelector('[data-behavior="lbh-cookie-close"]')
}

CookieBanner.prototype.checkCookies = function () {
  var nameEQ = COOKIE_NAME + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length)
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length)
    }
  }
  return null
}

CookieBanner.prototype.showCookieBanner = function () {
  this.$module.style.display = 'block'
  this.bindAcceptButton()
}

CookieBanner.prototype.bindAcceptButton = function () {
  var _module = this.$module
  this.$button.addEventListener('click', function () {
    var date = new Date()
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000))
    var expires = '; expires=' + date.toGMTString()
    if (DROP_COOKIE) {
      document.cookie = COOKIE_NAME + '=true' + expires + '; path=/'
    }
    _module.style.display = 'none'
  })
}

CookieBanner.prototype.init = function () {
  if (!this.$module) {
    return false
  }

  var seenCookie = this.checkCookies()
  if (seenCookie === 'true') {
    return false
  } else {
    this.showCookieBanner()
  }
}

export default CookieBanner
