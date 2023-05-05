const btns = document.querySelectorAll('.faq-toggle');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  })
})