// checkout.js
(() => {
  'use strict'

  // Ambil semua form dengan class 'needs-validation'
  const forms = document.querySelectorAll('.login-form')

  // Looping semua form
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()