let currentPicture = document.getElementById('wordPicture')
let nextButton = document.querySelector(".nextButton")
let begginingScore = 0
const score = document.getElementById('score')
const possibleWords = document.getElementById('option-buttons')
let gameStarter = document.getElementById('gameStarter')
let messageCorrect = document.getElementById('correct')

let questions = []
fetch('words.json')
.then((res) => {
    return res.json();
})
.then((loadedQuestions) => {
    questions = loadedQuestions;
})
.catch((err) => {
    console.error(err);
});



gameStarter.addEventListener('click', function () {
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

let shuffledQuestions, currentQuestionIndex

function chooseNextWord () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])   
}

function showQuestion(questions) {
    const imgElement = document.createElement('img')
    imgElement.classList.add('wordImg') 
    imgElement.src = questions.image
    currentPicture.append(imgElement)
    questions.options.forEach(text => {
        const button = document.createElement('button')
        button.innerText = text.answer
        button.classList.add('wordButton')
        if (text.right) {
            button.dataset.right = text.right
        }
        button.addEventListener('click', chooseAnswer)
        possibleWords.appendChild(button)
    })
}


function resetState () {
clearStatusClass(document.body)
 nextButton.classList.add('hidden')
 messageCorrect.innerHTML = ''
 while (possibleWords.firstChild) {
     possibleWords.removeChild(possibleWords.firstChild)
 }

}

function chooseAnswer (e) {
    const selectedButton = e.target
    const right = selectedButton.dataset.right
    setStatusClass(document.body, right)
    Array.from(possibleWords.children).forEach(button =>{
        setStatusClass(button, button.dataset.right)   
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
       
        nextButton.classList.remove('hidden')
    } else {
        nextButton.classList.add('hidden')
    }
    console.log(right)
    
}

function setStatusClass (element, right) {
    clearStatusClass(element)
    if (right) {
        element.classList.add('right')
        begginingScore++
        score.textContent = begginingScore
        messageCorrect.innerHTML = 'You are right!!!'
    } else  {
        element.classList.add('wrong')
        messageCorrect.innerHTML = 'Wrong, try again'
    }
}

function  clearStatusClass(element) {
    element.classList.remove('right')
    element.classList.remove('wrong')
}










