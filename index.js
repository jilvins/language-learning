let currentPicture = document.querySelector('img')
let answer = document.getElementById('option1')
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
})






const cat = {
    english: 'cat',
    latvian: 'kaķis',
    image: '/images/cat-2083492_1280.jpg',
    options: ['kaķis', 'kalvis', 'vāvere', 'vanags']
}

const dog = {
    english: 'dog',
    latvian: 'suns',
    image: '/images/puppy-1903313_1280.jpg',
    options: ['suns', 'sūna', 'purns', 'purvs']
}

const bread = {
    english: 'bread',
    latvian: 'maize',
    image: '/images/bread-1510155_1280.jpg',
    options: ['maize', 'maiss', 'balva', 'baļķis']
}

const water = {
    english: 'water',
    latvian: 'ūdens',
    image: '/images/drip-921067_1280.jpg',
    options: ['ūdens', 'ūdrs', 'ābols', 'āzis']
}

const house = {
    english: 'house',
    latvian: 'māja',
    image: '/images/architecture-1836070_1280.jpg',
    options: ['māja', 'mākonis', 'roka', 'ronis']
}