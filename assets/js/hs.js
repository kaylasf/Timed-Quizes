
var userName = localStorage.getItem('User')
var score = localStorage.getItem('Score')
var time = localStorage.getItem('Time')
var listie = document.getElementById('listie')
console.log(userName)

for (let i = 0; i < localStorage.length; i++) {
    var list = `
   <div class="list-group  pb-3">
   <a href="#" class="list-group-item list-group-item-action list-group-item-success text-justify">
   <div class="lead">User: ${userName}</div>
   <div class="lead">Score: ${score}</span></div>
   <div class="lead">Seconds Remaining: ${time} </span></div>
   </a>
   </div>
   `
    listie.innerHTML = list
}