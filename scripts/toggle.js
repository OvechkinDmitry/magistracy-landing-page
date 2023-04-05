const toggle = document.querySelector('.admission__toggle')
const labels = toggle.querySelectorAll('p')
const switcher = document.getElementById('switcher')
const dates = document.querySelectorAll('.subparagraph__time')

switcher.addEventListener('change', (e) => {
    labels.forEach(label => label.classList.toggle('active-blue'))
    dates.forEach(date => {
        const {active, inactive} = date.dataset
        date.innerHTML = e.target.checked ? active : inactive
    })
})