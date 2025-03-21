// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//add an event listener to each heart
document.addEventListener('DOMContentLoaded', function() {
  const hearts = document.querySelectorAll('.like-glyph')
  hearts.forEach(heart => {
    heart.addEventListener('click', like)  })
})
.catch(error => {
  const errorModal = document.getElementById('modal')
  errorModal.classList.remove('hidden')
  const errorMessage = document.getElementById('modal-message')
  errorMessage.innerText = error
  setTimeout(() => {
    errorModal.classList.add('hidden')
  }, 3000)
  .then(() => {
    const hearts = document.querySelectorAll('.like-glyph')
    hearts.forEach(heart => {
      heart.addEventListener('click', like)
    })
  })
})
addtoggleLike(heart)
//add toggleLike function
function toggleLike(heart) {
  if (heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART
    heart.classList.add('activated-heart')
  } else {
    heart.innerText = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
