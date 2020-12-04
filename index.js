let currentPicture = document.getElementById('wordPicture')
let nextButton = document.querySelector(".nextButton")
let begginingScore = 0
const score = document.getElementById('score')
const possibleWords = document.getElementById('option-buttons')
let gameStarter = document.getElementById('gameStarter')



gameStarter.addEventListener('click', function () {
    let hiddenElements = document.querySelector(".hidden")
    gameStarter.classList.add('hidden')
    hiddenElements.classList.remove('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    chooseNextWord()

    
    
})

nextButton.addEventListener('click', () => {
    document.querySelector('img').classList.add('hidden')
    currentQuestionIndex++
    chooseNextWord ()

})

let shuffledQuestions, currentQuestionIndex

function chooseNextWord () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])   
}

function showQuestion(picture) {
    const imgElement = document.createElement('img')
    imgElement.src = picture.url
    currentPicture.append(imgElement)
    picture.options.forEach(text => {
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
    if(shuffledQuestions.length > currentQuestionIndex + 1)
    
    begginingScore++
    score.textContent = begginingScore
    let messageCorrect = document.getElementById('correct')

    let paragraphElement = document.createElement('p')
    paragraphElement.innerHTML = 'You are right!!!'
    messageCorrect.append(paragraphElement)                                 //Why this is not working?
        nextButton.classList.remove('hidden')
}
function setStatusClass (element, right) {
    clearStatusClass(element)
    if (right) {
        element.classList.add('right')
    } else {
        element.classList.add('wrong')
    }
}

function  clearStatusClass(element) {
    element.classList.remove('right')
    element.classList.remove('wrong')
}


/*function nextLevel () {
 document.getElementById('correct').innerText = 'You are right!!!'
 begginingScore++
 score.textContent = begginingScore
 nextButton.classList.remove('hidden')
}*/





const questions = [
    {
        english: 'cat',
        latvian: 'kaķis',
        url: '/images/cat-2083492_1280.jpg',
        options: [  {answer: 'kaķis', right: true}, 
                    {answer:'kalvis', right: false},    
                    {answer: 'vāvere', right: false}, 
                    {answer: 'vanags', right: false}
                ],
    
            },
    {
        english: 'dog',
        latvian: 'suns',
        url: '/images/puppy-1903313_1280.jpg',
        options: [  {answer:'suns', right: true},
                    {answer:'sūna', right: false},
                    {answer:'purns', right: false},
                    {answer:'purvs', right: false}
        ]
    },
     {
        english: 'bread',
        latvian: 'maize',
        url: '/images/bread-1510155_1280.jpg',
        options: [  {answer:'maize', right: true},
                    {answer:'maiss', right: false},
                    {answer:'balva', right: false},
                    {answer:'baļķis', right: false}
                ]
    },
    
    {
        english: 'water',
        latvian: 'ūdens',
        url: '/images/drip-921067_1280.jpg',
        options: [  {answer:'ūdens', right: true}, 
                    {answer:'ūdrs', right: false}, 
                    {answer:'ābols', right: false}, 
                    {answer:'āzis', right: false}
                ]
    },
    
     {
        english: 'house',
        latvian: 'māja',
        url: '/images/architecture-1836070_1280.jpg',
        options: [  {answer:'māja', right: true}, 
                    {answer:'mākonis', right: false},
                    {answer:'roka', right: false}, 
                    {answer:'ronis', right: false}
                ]
     }
    ]



