const form = document.querySelector('#contact-form')
const inputs = form.querySelectorAll('.input')
const button = form.querySelector('.btn')

form.addEventListener('input', () => button.disabled = !Array.from(inputs).every(input => input.value))