
// TIME VARIABLES
var isQuizing = false
var seconds = document.querySelector('#time-remaining')
var timesUp = document.querySelector('#timesUp')
var display = document.querySelector('#remaining')
//  QUIZ VARIABLES
questionDisplay = document.querySelector('#questions-here')





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
        if (i == 0) { clearInterval(this); seconds.innerHTML = "Time's Up!"; display.setAttribute('style', "display: none"); timesUp.setAttribute('style', "display: show") }
        else { seconds.innerHTML = i-- };
    }, 1000);
}



var questions = [
    q1 = {
        title: '1',
        question: "what does wubba lubba dub dub mean?",
        choices: ["Please Leave", "I'm A Genius", "Let's Party", "I'm In Great Pain"],
        answer: 3,
    },
    q2 = {
        title: '2',
        question: "What is the name of Morty's crush?",
        choices: ["Annie", "Jessica", "Summer", "Heather"],
        answer: 1,
    },

];


function getQuiz() {
    
    for( var i = 0; i < questions.length; i++)  {
        //create a card dynamically-
        // var qDiv = document.createElement('div')
        // card.classList = "card-body"

        var content =
            ` 
        <div class="qDiv" >
            <div class="card mb-4 col-12">
    <div class="card-header text-capitalize">
        Question ${questions[i].title}
    </div>
    <div class="card-body text-center text-capitalize">
        <h5 class="card-title">${questions[i].question}</h5>

        
        <div class="col-sm-12   text-justify" style="overflow:scroll">
        <div class="form-check ">
        <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="0" checked>
        <label class="form-check-label text-capitalize " for="exampleRadios1">
          ${questions[i].choices[0]}
        </label>
        </div>
         <div class="form-check ">
        <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked>
        <label class="form-check-label text-capitalize " for="exampleRadios1">
          ${questions[i].choices[1]}
        </label>
        </div>
         <div class="form-check ">
        <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="2" checked>
        <label class="form-check-label text-capitalize " for="exampleRadios1">
          ${questions[i].choices[2]}
        </label>
        </div>
         <div class="form-check ">
        <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="3" checked>
        <label class="form-check-label text-capitalize " for="exampleRadios1">
          ${questions[i].choices[3]}
        </label>
        </div>
    </div>


     
        <a onClick="check()" class="btn btn-primary">Submit<i class="em em-crossed_fingers" aria-role="presentation" aria-label="HAND WITH INDEX AND MIDDLE FINGERS CROSSED"></i></a>
    </div>
</div> 
</div>`

console.log(content)

        questionDisplay.innerHTML = content

    }
};



function check(){
 
    console.log()
}




init()