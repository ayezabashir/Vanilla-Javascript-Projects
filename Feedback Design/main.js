const ratings = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';

ratingContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
    // console.log(selectedRating);
  }
})

function removeActive() {
  // ratings.forEach(rating => rating.classList.remove('active'));
  // OR
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
     <i class="fas fa-heart"></i>
     <strong>Thank You!</strong>
     <br/>
     <strong>Feedback: ${selectedRating} </strong>
     <p>We'll use your feedback for improvements.</p>
  `
})