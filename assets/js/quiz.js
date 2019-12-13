
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
var currQ
var subButton = document.getElementById('submit')



// INITIAL FUNCTION
// START TIMER AND DISPLAY QUIZ
function init() {
    // setInterval(function(){ time-- }, 1000);
    isQuizing = true
    countdown()
    getQuiz()


}

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
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },
    {
        title: '4',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },
    {
        title: '5',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },
    {
        title: '6',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },
    {
        title: '7',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },
    {
        title: '8',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },
    {
        title: '9',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },
    {
        title: '10',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },


];
function getQuiz() {
    //plug info into one card and have info loop through after submit is clicked. 
    //how to have info loop through
    currQ = questions[0]
    displayNext()


}

function displayNext() {
    questionTitle.innerHTML = currQ.title
    cardQuestion.innerHTML = currQ.question
    q0.innerHTML = currQ.choices[0]
    q1.innerHTML = currQ.choices[1]
    q2.innerHTML = currQ.choices[2]
    q3.innerHTML = currQ.choices[3]
}
//GFU: LOOP THROUGH OBJECT??
//init //displaying 1 Q //create a var 
//click event 





subButton.addEventListener("click", function (e) {
 
check(e)
    
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
});



function check(e){

if()
}
// if user selection === questions.answer - correct - no image; push correct answers into array 

//if else- user !=== question.answer= boo image for 3 seconds 

//if on last question and press submit- stop quiz and grab score- 
// }




init()















     // console.log(questions[i].q1.choices[2])


        //create a card dynamically-

        //         var content =
        //             ` 
        //         <div class="qDiv" >
        //             <div class="card mb-4 col-12">
        //     <div class="card-header text-capitalize">
        //         Question ${questions[i].title}
        //     </div>
        //     <div class="card-body text-center text-capitalize">
        //         <h5 class="card-title">${questions[i].question}</h5>


        //         <div class="col-sm-12   text-justify" >
        //         <div class="form-check ">
        //         <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="0" checked>
        //         <label class="form-check-label text-capitalize " for="exampleRadios1">
        //           ${questions[i].choices[0]}
        //         </label>
        //         </div>
        //          <div class="form-check ">
        //         <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked>
        //         <label class="form-check-label text-capitalize " for="exampleRadios1">
        //           ${questions[i].choices[1]}
        //         </label>
        //         </div>
        //          <div class="form-check ">
        //         <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="2" checked>
        //         <label class="form-check-label text-capitalize " for="exampleRadios1">
        //           ${questions[i].choices[2]}
        //         </label>
        //         </div>
        //          <div class="form-check ">
        //         <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="3" checked>
        //         <label class="form-check-label text-capitalize " for="exampleRadios1">
        //           ${questions[i].choices[3]}
        //         </label>
        //         </div>
        //     </div>
        //         <a onClick="check()" class="btn btn-primary">Submit<i class="em em-crossed_fingers" aria-role="presentation" aria-label="HAND WITH INDEX AND MIDDLE FINGERS CROSSED"></i></a>
        //     </div>
        // </div> 
        // </div>`

        // console.log(content)

        //         cardDisplay.innerHTML = content