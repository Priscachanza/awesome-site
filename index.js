let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console.log(countEl)
let count = 0

// console.log(saveEl)

 function increment(){
    count += 1
    countEl.textContent = count
    }
// alert("hello world");
function save(){
   let countStr = count + " - "
   saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0
    }
//  let username =" prisca"  
// let message = "you have three new notifications"

// let messageToUser = username + " " + message +"!"
//     console.log(messageToUser)

// let Name = "Prisca Chanza"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + Name
// console.log(myGreeting)
let welcomeEl = document.getElementById("welcome-el")
let Name = "Prisca Chanza"
let greeting = "welcome back "

welcomeEl.innerText = greeting + Name

welcomeEl.innerText += "👋"