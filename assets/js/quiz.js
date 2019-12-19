
// TIME VARIABLES
var isQuizing = false
var seconds = document.querySelector('#time-remaining')
var timesUp = document.querySelector('#timesUp')
var display = document.querySelector('#remaining')
//  QUIZ VARIABLES
var questionTitle = document.getElementById('question-title')
var cardQuestion = document.getElementById('card-question')
var q0 = document.getElementById('q0')
var q1 = document.getElementById('q1')
var q2 = document.getElementById('q2')
var q3 = document.getElementById('q3')
var questionDisplay = document.getElementById('question-display')
var cardDisplay = document.getElementById('cardDisplay')
var checkMe = document.getElementById('checkMe')
var currQ
var subButton = document.getElementById('submit')
var win = document.getElementById('win')
var lose = document.getElementById('lose')
var loseDisplay = document.getElementById('lose-hide')
var total = 0
var boo = document.getElementById('wrong')
var yey = document.getElementById('winning')

// TOP SCORE VARIABLES
var userBtn = document.getElementById('button-addon2')
var userInput = document.getElementById('userInput')
var navie = document.getElementById('nav')




// INITIAL FUNCTION
// START TIMER AND DISPLAY QUIZ
function init() {
    // setInterval(function(){ time-- }, 1000);
    isQuizing = true
    countdown()
    getQuiz()
}

var ranPic = ["../images/boo1.jpg", '../images/boo2.jpg', '../images/boo3.jpg', '../images/boo4.jpg', '../images/boo5.jpg', '../images/boo6.jpg', '../images/boo7.jpg'
]
var yay = ["../images/yay2.jpg", '../images/yay2.jpg', '../images/yay3.jpg', '../images/yay4.jpg', '../images/yay5.jpg', '../images/yay6.jpg', '../images/yay7.jpg'
]


function countdown() {
    var i = 75;

    // This block will be executed 100 times.
    setInterval(function () {
        if (i == 0) {
            clearInterval(this);
            display.setAttribute('style', "display: none");
            timesUp.setAttribute('style', "display: show");
            document.getElementById('cardDisplay').setAttribute('style', "display: none")
            //display score, option for highscores, play again. 

        }
        else { seconds.innerHTML = i-- };
    }, 1000);
}



var questions = [
    {
        title: '1',
        question: "what does wubba lubba dub dub mean?",
        choices: ["Please Leave", "I'm A Genius", "Let's Party", "I'm In Great Pain"],
        answer: 3,
    },
    {
        title: '2',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },
    {
        title: '3',
        question: "Who does Birdperson marry?",
        choices: ["Paula", "Sherhonda", "Tammy", "Beth"],
        answer: 2,
    },
    {
        title: '4',
        question: "Hungry... For... ____?",
        choices: ["Apples", "Milk", "Jello", "Cookies"],
        answer: 0,
    },
    {
        title: '5',
        question: "Whose body housed anatomy park?",
        choices: ["Stan", "Jerry", "BirdPerson", "Rubin"],
        answer: 3,
    },
    {
        title: '6',
        question: "Which McDonalds item made a comeback from Rick's flashback?",
        choices: ["McBLT", "Szechuan sauce", "McRib", "McFlurry"],
        answer: 1,
    },
    {
        title: '7',
        question: "Who does Beth shoot thinking they are a parasite?",
        choices: ["Mr. PoopyButthole", "Big Chungus", "Photography Raptor", "Mr. Beauregard"],
        answer: 0,
    },
    {
        title: '8',
        question: "Whcih member of the Vindicators is half cold, unfeeling reptile and half cold, equally as unfeeling machine?",
        choices: ["Vance Maximus", "Million Ants", "Crocubot", "Alan Rails"],
        answer: 2,
    },
    {
        title: '9',
        question: "What song does Rick and Morty sing to win the intergalactic musical competition?",
        choices: ["Get Shwifty", "We Are The Champions", "Funky Town", "Palmdale"],
        answer: 0,
    },
    {
        title: '10',
        question: "Which species feels more pain the longer they're alive?",
        choices: ["Humans", "Meeseeks", "Gazorpazorps", "Cronenbergs"],
        answer: 1,
    },



];

function getQuiz() {
    currQ = questions[0]
    displayNext()
}




var answerQuestion;
function checkValue(value) {
    answerQuestion = value
}

function displayNext() {
    questionTitle.innerHTML = currQ.title
    cardQuestion.innerHTML = currQ.question
    q0.innerHTML = currQ.choices[0]
    q1.innerHTML = currQ.choices[1]
    q2.innerHTML = currQ.choices[2]
    q3.innerHTML = currQ.choices[3]
}

userBtn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(total)
    localStorage.setItem("User", userInput.value);
    localStorage.setItem("Score", total);
    userBtn.setAttribute('style', 'display: none')
    userInput.setAttribute('style', 'display: none')
    document.getElementById('goSee').setAttribute('style', 'display: show')

})

subButton.addEventListener("click", function (e) {
    if (answerQuestion === undefined) {
        answerQuestion = 0
    }

    var currentQuestion = parseInt(document.getElementById('question-title').innerHTML)
    console.log(currentQuestion)

    if (currentQuestion == 2) {
        document.getElementById('cardDisplay').setAttribute('style', "display: none")
        document.getElementById('total').setAttribute('style', "display: show")
        // document.getElementById('userTotal').innerHTML = total
        navie.setAttribute('style', "display:show")
        display.setAttribute('style', "display: none");


        var endTime = seconds.innerHTML
        localStorage.setItem("Time", endTime);
        // console.log(endTime)
    }

    if (answerQuestion == questions[(currentQuestion - 1)].answer) {

        win.setAttribute('style', 'display: show')
        yey.setAttribute('src', randomPic(yay))
        total++
        console.log('you got it right!' + total)

        setTimeout(function () {
            win.setAttribute('style', 'display: none')
        }, 2000);

    }



    else if (answerQuestion != questions[(currentQuestion - 1).answer]) {
        console.log('nah that aint right')
        display.setAttribute('style', "display: none");
        document.getElementById('cardDisplay').setAttribute('style', "display: none")
        lose.setAttribute('style', 'display: show')
        setTimeout(function () {
            var i = seconds.innerHTML;
            console.log(i)
            display.setAttribute('style', "display: show");
            document.getElementById('cardDisplay').setAttribute('style', "display: show")
            lose.setAttribute('style', 'display: none')
            ranI = Math.random(ranPic)
            boo.setAttribute('src', randomPic(ranPic))

        }, 3000);

    }


    getNext()

})

function randomPic(items) {

    return items[Math.floor(Math.random() * items.length)];

}




function getNext() {
    switch (currQ) {
        case currQ = questions[0]:
            currQ = questions[1]
            displayNext()
            break;
        case currQ = questions[1]:
            currQ = questions[2]
            displayNext()
            break;
        case currQ = questions[2]:
            currQ = questions[3]
            displayNext()
            break;
        case currQ = questions[3]:
            currQ = questions[4]
            displayNext()
            break;
        case currQ = questions[4]:
            currQ = questions[5]
            displayNext()
            break;
        case currQ = questions[5]:
            currQ = questions[6]
            displayNext()
            break;
        case currQ = questions[6]:
            currQ = questions[7]
            displayNext()
            break;
        case currQ = questions[7]:
            currQ = questions[8]
            displayNext()
            break;
        case currQ = questions[8]:
            currQ = questions[9]
            displayNext()
            break;
        case currQ = questions[9]:
            currQ = questions[10]
            displayNext()
            break;
        default:
            document.getElementById('cardDisplay').setAttribute('style', "display: none");

    }
}




init()

