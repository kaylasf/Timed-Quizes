
// var userName = localStorage.getItem('User')
// var score = localStorage.getItem('Score')
// var time = localStorage.getItem('Time')
var listie = document.getElementById('listie')
var listMe = []
var topScore = localStorage.getItem("topScores");
console.log("this be topscore " + topScore)
listMe.push(topScore)
console.log(listMe)
console.log(`this is list meeee '${listMe}'`)

for (let i = 0; i < listMe.length; i++) {
 console.log(`this is iiii ${listMe[i]} and more ${listMe[i][3]}`)

  
  
    var list = `
   <div class="list-group  pb-3">
   <a href="#" class="list-group-item list-group-item-action list-group-item-success text-justify">
   <div class="lead">User: ${listMe[i]}</div>
   <div class="lead">Score: ${listMe[i][4]}/10</span></div>
   <div class="lead">Seconds Remaining: ${listMe[i][2]} </span></div>
   </a>
   </div>
   `
    listie.innerHTML = list


}