import { throttle } from 'underscore'

function BackToTop ($module) {
  this.$module = $module
}

BackToTop.prototype.checkScrollPosition = function (element) {
  var windowHeight = window.innerHeight
  var showHeight = windowHeight > 480 ? 480 : windowHeight
  var scrollPos = window.scrollY
  if (scrollPos > showHeight) {
    element.classList.add('lbh-back-to-top--visible')
  } else {
    element.classList.remove('lbh-back-to-top--visible')
  }
}

BackToTop.prototype.init = function () {
  // Check for module
  if (!this.$module) {
    return
  }

  var throttled = throttle(this.checkScrollPosition, 200)
  var backToTop = this.$module
  window.addEventListener('scroll', function () {
    throttled(backToTop)
  })
}

export default BackToTop
