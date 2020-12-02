
// TIME VARIABLES
var isQuizing = false
var seconds = document.querySelector('#time-remaining')
var timesUp = document.querySelector('#timesUp')
var display = document.querySelector('#remaining')
//  QUIZ VARIABLES
var currentQuestion = document.getElementById('question-title').innerHTML

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
var currScore = document.querySelector('#currentScore')

// var currTime = document.getElementById('time-remaining').innerHTML
var topScoreArr = []
var userTime 



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
var greenPortal = ['../images/portal.PNG']


function countdown() {
    var i = 137;
   
    // This block will be executed 100 times.
    setInterval(function () {
        if(currQ > 10){
            clearInterval(this);
            display.setAttribute('style', "display: none");
            timesUp.setAttribute('style', "display: show");
            document.getElementById('cardDisplay').setAttribute('style', "display: none")
            document.getElementById('total').setAttribute('style', "display: show")
            navie.setAttribute('style', "display:show")

        }
        if (i == 0) {
           
            userTime = seconds.innerHTML
            clearInterval(this);
            display.setAttribute('style', "display: none");
            timesUp.setAttribute('style', "display: show");
            document.getElementById('cardDisplay').setAttribute('style', "display: none")
            document.getElementById('total').setAttribute('style', "display: show")
            navie.setAttribute('style', "display:show")
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
    //if there are no more questions, dont throw error. 
if(currQ == undefined){
    console.log('No error, no more questions')

}else{
    
    //create if statement for when there is no longer an upcoming Q
    questionTitle.innerHTML = currQ.title
    cardQuestion.innerHTML = currQ.question
    q0.innerHTML = currQ.choices[0]
    q1.innerHTML = currQ.choices[1]
    q2.innerHTML = currQ.choices[2]
    q3.innerHTML = currQ.choices[3]
}
}




userBtn.addEventListener('click', function (e) {
    e.preventDefault()
   
//         var prevArr = localStorage.getItem("topScores");

//    if(prevArr != null){
//     console.log(`this is prev arrrr` + prevArr)
//     topScoreArr.push(prevArr)
//    }    
   
    var percentage =  function(x){
      var dec =  x/10
    var scoress = dec * 100
      return scoress

    }
// var nueUser= {'UserName':userInput.value,'Score':total,'EndTime':userTime}
var alsoNue=[`Username: ${userInput.value}`,`Score: ${total}`,`Seconds Left: ${userTime}`,`Percentage: ${percentage(total).toFixed(1)}`]

     //push new user into array
    topScoreArr.push(alsoNue)
    console.log(`this is user array after pushing new user ${topScoreArr}`)

   
    for (let i = 0; i < topScoreArr.length; i++){
    console.log(`LOOOOPPPP ${topScoreArr[i]}`)
    var list = `

    <div class="card mb-4 col-sm-12 col-lg-8 col-md-8 p-0 mx-auto" style="background-color:#2d2d2d">

    <h5 class="card-title p-1" style="background-color:#1f1f1f">Results</h5>
    <p class="lead card-text">${topScoreArr[i][0]}</p>
    <p class="lead card-text">${topScoreArr[i][1]}/10</span></p>
    <p class="lead card-text">${topScoreArr[i][2]} </span></p>
    <p class="lead card-text mb-3" style="color:red">${topScoreArr[i][3]} </span></p>
    </a>
    </div>
    `}
    currScore.innerHTML = list
    //grab previous user from storage and add to object & check to see which one has the highest scores
    // localStorage.setItem("topScores", JSON.stringify(topScoreArr));
    
//call function to sort through array and put remaining users into local storage for displaying top 3. 

    // localStorage.setItem("Score", total);
    userBtn.setAttribute('style', 'display: none')
    userInput.setAttribute('style', 'display: none')
    document.getElementById('goSee').setAttribute('style', 'display: show')


})


subButton.addEventListener("click", function (e) {
    e.preventDefault()
    if (answerQuestion === undefined) {
        answerQuestion = 0
    }

    currentQuestion = parseInt(document.getElementById('question-title').innerHTML)
    // console.log(currentQuestion)

    if (currentQuestion === 10) {
        document.getElementById('cardDisplay').setAttribute('style', "display: none")
        document.getElementById('timesUp').setAttribute('style', "display: none")
        document.getElementById('total').setAttribute('style', "display: show")

        // document.getElementById('userTotal').innerHTML = total
        navie.setAttribute('style', "display:show")
        display.setAttribute('style', "display: none");

        userTime = seconds.innerHTML
    
        // localStorage.setItem("Time", endTime);
        console.log("this is end time " + userTime)
    }

    if (answerQuestion == questions[(currentQuestion - 1)].answer) {

        win.setAttribute('style', 'display: show')
        yey.setAttribute('src', randomPic(yay))
        total++
        // console.log('you got it right!' + total)

        setTimeout(function () {
            win.setAttribute('style', 'display: none')
        }, 2000);

    }



    else if (answerQuestion != questions[(currentQuestion - 1).answer]) {
        // console.log('nah that aint right')
        display.setAttribute('style', "display: none");
        document.getElementById('cardDisplay').setAttribute('style', "display: none")
        lose.setAttribute('style', 'display: show')
        setTimeout(function () {
            var i = seconds.innerHTML;
            // console.log(i)
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





// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();