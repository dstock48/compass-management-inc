document.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar')
  const bounding = navbar.getBoundingClientRect()
  if (window.scrollY > bounding.height) {
    navbar.classList.add('fixed')
    document.querySelector('body').style.paddingTop = `${bounding.height}px`
  }
  else if (window.scrollY === 0) {
    navbar.classList.remove('fixed')
    document.querySelector('body').style.paddingTop = 0
  }
})