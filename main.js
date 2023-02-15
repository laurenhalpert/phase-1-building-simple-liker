// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heart = document.querySelectorAll(".like-glyph");
heart.forEach(element => {
  element.addEventListener("click", (event) => {
    mimicServerCall()
    .then( () => { 
      if (element.innerText === EMPTY_HEART) {
        element.innerText = FULL_HEART;
        element.className = "activated-heart";
      } else if (element.className === "activated-heart"){
        element.innerText = EMPTY_HEART;
        element.className = "like-glyph";
      }
      
  
    })
    .catch(error => {
      document.querySelector(".hidden").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector("div#modal").className = "hidden"
      }, 3000)
    })
  })
})







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
