const header = document.querySelector('.header')
let prevScrollPos = window.scrollY

window.addEventListener('scroll', (e) => {
    let currentScrollPos = window.scrollY
    console.log(prevScrollPos, currentScrollPos)
    header.style.top = prevScrollPos < currentScrollPos ? '-110px': '0'
    prevScrollPos = currentScrollPos
})

