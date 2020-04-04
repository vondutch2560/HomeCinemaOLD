import Vue from 'vue'

Vue.prototype.$scrollToSmooth = (target, duration, offset) => {
  // Hàm Scroll To Smooth
  const startPosition = window.scrollY || window.pageYOffset
  const targetPosition =
    target === 'top'
      ? -window.pageYOffset
      : document.querySelector(target).getBoundingClientRect().top
  const offsetPosition = offset || 0
  const durationScrollToSmooth = duration || 800
  const distancePosition = targetPosition + offsetPosition
  let timeStart = null
  let timeElapsed
  let next

  function loopScrollToSmooth(timeCurrent) {
    // khi dùng window.requestAnimationFrame để loop hàm thì nó mặc định có 1 đối số là thời gian hiện tại (ở đây ta gọi timeCurrent)
    if (timeStart === null) timeStart = timeCurrent
    timeElapsed = timeCurrent - timeStart
    next = easing(
      timeElapsed,
      startPosition,
      distancePosition,
      durationScrollToSmooth
    )
    window.scrollTo(0, next)
    if (timeElapsed < durationScrollToSmooth)
      window.requestAnimationFrame(loopScrollToSmooth)
  }

  function easing(t, b, c, d) {
    // easeOutQuint
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
  }

  window.requestAnimationFrame(loopScrollToSmooth)
}
