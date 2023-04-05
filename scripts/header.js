const header = document.querySelector('.header')
let prevScrollPos = window.scrollY

window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY
    header.style.top = prevScrollPos < currentScrollPos ? '-190px': '0'
    prevScrollPos = currentScrollPos
},{ passive: true })

