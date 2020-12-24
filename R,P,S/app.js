function computerPlay() {
    let sayi=Math.floor(Math.random()*3);
    
    const rps=["rock","paper","scissor"];
    switch (sayi) {
        case 0:
            return rps[0];
            
            break;
        case 1:
            return rps[1];
            break;

        case 2:
            return rps[2];
            break;
    
        
    }
    
}


function playAround(playerselect,computerselect) {
    if (playerselect==computerselect) {
        return "you tie";
        
    }
    else if (playerselect==="rock"&& computerselect==="paper") {
        return "you loseee";
    }
    else if (playerselect==="rock"&& computerselect==="scissor") {
        return "you winnn";
    }
    else if (playerselect==="paper"&& computerselect==="rock") {
        return "you winnn";
    }
    else if (playerselect==="paper"&& computerselect==="scissor") {
        return "you loseee";
    }
    else if (playerselect==="scissor"&& computerselect=="rock") {
        return "you loseee";
    }
    else if (playerselect==="scissor"&& computerselect=="paper") {
        return "you winnn";
    }
   else
   return "invalid value";
     
}


let playerselect =prompt("Enter a value","rock");
let computerselect=computerPlay();


console.log(playAround(playerselect.toLowerCase(),computerselect));



function game() {
    let i;
    for ( i = 0; i < 5; i++) {
        function computerPlay() {
            let sayi=Math.floor(Math.random()*3);
            
            const rps=["rock","paper","scissor"];
            switch (sayi) {
                case 0:
                    return rps[0];
                    
                    break;
                case 1:
                    return rps[1];
                    break;
        
                case 2:
                    return rps[2];
                    break;
            
                
            }
            
        }
        
        
        function playAround(playerselect,computerselect) {
            if (playerselect==computerselect) {
                return "you tie";
                
            }
            else if (playerselect==="rock"&& computerselect==="paper") {
                return "you loseee";
            }
            else if (playerselect==="rock"&& computerselect==="scissor") {
                return "you winnn";
            }
            else if (playerselect==="paper"&& computerselect==="rock") {
                return "you winnn";
            }
            else if (playerselect==="paper"&& computerselect==="scissor") {
                return "you loseee";
            }
            else if (playerselect==="scissor"&& computerselect=="rock") {
                return "you loseee";
            }
            else if (playerselect==="scissor"&& computerselect=="paper") {
                return "you winnn";
            }
           else
           return "invalid value";
             
        }
        
        
        let playerselect =prompt("Enter a value","rock");
        let computerselect=computerPlay();
        
        
        console.log(playAround(playerselect.toLowerCase(),computerselect));
        
        
        
    }

console.log(i);
    
}


game();


