let currentPicture = document.querySelector('img')
let answer = document.getElementById('option1')
let nextButton = document.querySelector(".hidden2")
let begginingScore = 0
const score = document.getElementById('score')

let gameStarter = document.getElementById('gameStarter').addEventListener('click', function () {
    let hiddenElements = document.querySelector(".hidden")
    
    hiddenElements.classList.remove('hidden')
    currentPicture.src='/images/architecture-1836070_1280.jpg'
    
    answer.innerHTML = house.options[0];
    document.getElementById('option2').innerHTML = house.options[1];
    document.getElementById('option3').innerHTML = house.options[2];
    document.getElementById('option4').innerHTML = house.options[3];

    
    
})


answer.addEventListener('click', function () {
 document.getElementById('answer').innerText = 'You are right!!!'
 begginingScore++
 score.textContent = begginingScore
 nextButton.classList.remove('hidden2')
})

document.querySelector('.nextButton').addEventListener ('click', function () {
    currentPicture.src='/images/cat-2083492_1280.jpg'
    
    answer.innerHTML = cat.options[0];
    document.getElementById('option2').innerHTML = cat.options[1];
    document.getElementById('option3').innerHTML = cat.options[2];
    document.getElementById('option4').innerHTML = cat.options[3];
} )





const questions = [
{
    english: 'cat',
    latvian: 'kaķis',
    image: '/images/cat-2083492_1280.jpg',
    options: [  {answer: 'kaķis', right: true}, 
                {answer:'kalvis', right: false},    
                {answer: 'vāvere', right: false}, 
                {answer: 'vanags', right: false}
            ],

        },
{
    english: 'dog',
    latvian: 'suns',
    image: '/images/puppy-1903313_1280.jpg',
    options: [  {answer:'suns', right: true},
                {answer:'sūna', right: false},
                {answer:'purns', right: false},
                {answer:'purvs', right: false}
    ]
},
 {
    english: 'bread',
    latvian: 'maize',
    image: '/images/bread-1510155_1280.jpg',
    options: [  {answer:'maize', right: true},
                {answer:'maiss', right: false},
                {answer:'balva', right: false},
                {answer:'baļķis', right: false}
            ]
},

{
    english: 'water',
    latvian: 'ūdens',
    image: '/images/drip-921067_1280.jpg',
    options: [  {answer:'ūdens', right: true}, 
                {answer:'ūdrs', right: false}, 
                {answer:'ābols', right: false}, 
                {answer:'āzis', right: false}
            ]
},

 {
    english: 'house',
    latvian: 'māja',
    image: '/images/architecture-1836070_1280.jpg',
    options: [  {answer:'māja', right: true}, 
                {answer:'mākonis', right: false},
                {answer:'roka', right: false}, 
                {answer:'ronis', right: false}
            ]
 }
]



