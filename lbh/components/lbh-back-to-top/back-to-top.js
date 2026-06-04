function throttle (fn, wait) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null
        fn.apply(context, args)
      }, wait)
    }
  }
}

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
