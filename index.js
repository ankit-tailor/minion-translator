let submitButton = document.querySelector('.submit-btn')
let userInput = document.querySelector('#user-input')
let minionTranslate = document.querySelector('#minion-translate')

// console.log(submitButton, userInput, minionTranslate)

let url = 'https://api.funtranslations.com/translate/minion.json?text='

function genrateUrl(text) {
  return url + text
}

function handelError(error) {
  alert('please try again' + error)
}

submitButton.addEventListener('click', () => {
  let textForTranslation = userInput.value
  let endpoint = genrateUrl(textForTranslation)
  console.log(endpoint)
  fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
      //   minionTranslate.innerHTML = json.contents.translated
      console.log(json)
    })
    .catch((err) => console.log(err))
})
