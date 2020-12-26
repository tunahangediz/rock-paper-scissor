function computerPlay() {
  let sayi = Math.floor(Math.random() * 3);

  switch (sayi) {
    case 0:
      return "rock";

      break;
    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
}


function playAround(e,computerselect) {
  
    computerselect=computerPlay();
   console.log(this.id);
   console.log(computerselect);
  if (this.id == computerselect) {
    return console.log("you tie");

  } else if( (this.id == "rock" && computerselect == "paper") ||(this.id == "paper" && computerselect == "scissors") || (this.id == "scissors" && computerselect == "rock")) {
    cscore.textContent = ++computerscore;
    return console.log("you losee");
  } 
  else  {
    pscore.textContent = ++playerscore;
    return console.log("you winnn");
  }
  
}
let computerscore = 0;
let playerscore = 0;
let pscore = document.querySelector("#pscore");
let cscore = document.getElementById("cscore");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", playAround));

// function game() {
//     let i;
//     for ( i = 0; i < 5; i++) {
//         function computerPlay() {
//             let sayi=Math.floor(Math.random()*3);

//             const rps=["rock","paper","scissor"];
//             switch (sayi) {
//                 case 0:
//                     return rps[0];

//                     break;
//                 case 1:
//                     return rps[1];
//                     break;

//                 case 2:
//                     return rps[2];
//                     break;

//             }

//         }

//         function playAround(this.id,computerselect) {
//             if (this.id==computerselect) {
//                 return console.log("you tie");

//             }
//             else if (this.id==="rock"&& computerselect==="paper") {
//                 return console.log("you losee");;
//             }
//             else if (this.id==="rock"&& computerselect==="scissor") {
//                 return console.log("you winnn");
//             }
//             else if (this.id==="paper"&& computerselect==="rock") {
//                 return console.log("you winnn");
//             }
//             else if (this.id==="paper"&& computerselect==="scissor") {
//                 return console.log("you losee");;
//             }
//             else if (this.id==="scissor"&& computerselect=="rock") {
//                 return console.log("you losee");;
//             }
//             else if (this.id==="scissor"&& computerselect=="paper") {
//                 return console.log("you winnn");
//             }
//            else
//            return "invalid value";

//         }

//         let this.id =prompt("Enter a value","rock");
//         let computerselect=computerPlay();

//         console.log(playAround(this.id.toLowerCase(),computerselect));

//     }

// console.log(i);

// }

// game();
