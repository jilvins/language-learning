const currentPicture = document.getElementById('wordPicture')
const nextButton = document.querySelector(".nextButton")
const score = document.getElementById('score')
const possibleWords = document.getElementById('option-buttons')
const gameStarter = document.getElementById('gameStarter')
const messageCorrect = document.getElementById('correct')
const begining = document.getElementById('begining')
let shuffledQuestions, currentQuestionIndex, theright
let begginingScore = 0
let currentQuestionSet = '/levels/3level/thirdLvl.json'

let questions = []

fetch(currentQuestionSet )
.then((res) => {return res.json();})
.then((loadedQuestions) => {questions = loadedQuestions;})
.catch((err) => {console.error(err);});

gameStarter.addEventListener('click', function gameStart () {
   
    let hiddenElements = document.querySelector(".hidden")
    gameStarter.classList.add('hidden')
    hiddenElements.classList.remove('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    chooseNextWord() 
    
    
})



nextButton.addEventListener('click', () => {
   
    let y = currentPicture.getElementsByClassName("wordImg");
    for (let i = 0; i < y.length; i++) {
    y[i].classList.add('hidden')
}
    currentQuestionIndex++
    chooseNextWord ()

})




function chooseNextWord () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
      
}


function showQuestion(questions) {
    const imgElement = document.createElement('img')
    imgElement.classList.add('wordImg') 
    imgElement.src = questions.image
    theright = questions.latvian
    currentPicture.append(imgElement)
    questions.options.forEach(text => {
        const button = document.createElement('button')
        button.innerText = text.answer
        button.classList.add('wordButton')
        button.addEventListener('click', chooseAnswer)
        possibleWords.appendChild(button)
    })
}


function resetState () {
 nextButton.classList.add('hidden')
 messageCorrect.innerHTML = ''
 while (possibleWords.firstChild) {
     possibleWords.removeChild(possibleWords.firstChild)
 }

}


function chooseAnswer (e) {
    const selectedAnswer = e.target.innerHTML
    const selectedButton = e.target
    
    if (selectedAnswer === theright) {
        selectedButton.classList.add('right')
        begginingScore++
        score.textContent = begginingScore
        messageCorrect.innerHTML = 'You are right!!! :)'
        if(shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hidden') }
            else {
                begining.classList.remove('hidden')
            }
    } else {
        selectedButton.classList.add('wrong')
        messageCorrect.innerHTML = 'Wrong, try again'
        begginingScore -= 0.5
    }

}