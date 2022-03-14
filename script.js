// Rock paper Scissors game!

// declaring variables

// variables for random and player cards
let randomElement = document.querySelector('.random');
let element = document.querySelectorAll('.element');

// variables for every single random card
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

// variables for scoreboard
let userScore = document.querySelector('.user');
let compScore = document.querySelector('.computer');

// Since we used querySelectorAll, we've to loop through all 3 elements
for(let i=0; i<element.length; i++){
    element[i].addEventListener('click', check);
    function check(e){
        // This creates a random number between 1, 2, and, 3
        let randomElements = Math.floor(Math.random()*3 +1);
        // The random number is assigned to each random card
        if(randomElements == 1){
            document.querySelector('.random-rock').style.transform = 'translateX(-20vw) scaleX(-1)';        
        }
        else if(randomElements == 2){
            document.querySelector('.random-paper').style.transform = 'translateX(-20vw) scaleX(-1)';      
        }
        else if(randomElements ==3 ){
            document.querySelector('.random-scissors').style.transform = 'translateX(-20vw) scaleX(-1)';       
        }
    // This is the scoreboard conditions
    // Each match indicates a condition, rock to rock will be zero, rock to paper will be one for computer and so on...
    // Inside each condition, there's a loop for changing pointer event to none and apply opacity to .9 to the player cards
    if (randomElements == 1 && element[i] == element[0]){
        element[i].classList.toggle('active');
        for(let x = 0; x<element.length; x++){
        element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';

        }
        document.querySelector('.button').style.display = 'block';
    }
    else if (randomElements == 2 && element[i] == element[0]){
        compScore.innerHTML++
        element[i].classList.toggle('active');
        for(let x = 0; x<element.length; x++){
            element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';
            }
        document.querySelector('.button').style.display = 'block';

        
    }
    else if (randomElements == 3 && element[i] == element[0]){
        userScore.innerHTML++
        element[i].classList.toggle('active');
        for(let x = 0; x<element.length; x++){
            element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';
            }
        document.querySelector('.button').style.display = 'block';

    }
    else if (randomElements == 1 && element[i] == element[1]){
        userScore.innerHTML++
        element[i].classList.toggle('active');

        for(let x = 0; x<element.length; x++){
            element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';

            }
        document.querySelector('.button').style.display = 'block';

    }
    else if (randomElements == 2 && element[i] == element[1]){
        element[i].classList.toggle('active');

        for(let x = 0; x<element.length; x++){
            element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';

            }
        document.querySelector('.button').style.display = 'block';

    }
    else if (randomElements == 3 && element[i] == element[1]){
        compScore.innerHTML++
        element[i].classList.toggle('active');
        for(let x = 0; x<element.length; x++){
            element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';

            }
        document.querySelector('.button').style.display = 'block';

    }
    else if (randomElements == 1 && element[i] == element[2]){
        compScore.innerHTML++
        element[i].classList.toggle('active');

        for(let x = 0; x<element.length; x++){
            element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';

            }
        document.querySelector('.button').style.display = 'block';

    }
    else if (randomElements == 2 && element[i] == element[2]){
        userScore.innerHTML++
        element[i].classList.toggle('active');
        for(let x = 0; x<element.length; x++){
            element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';

            }
        document.querySelector('.button').style.display = 'block';

    }
    else if (randomElements == 3 && element[i] == element[2]){
        element[i].classList.toggle('active');

        for(let x = 0; x<element.length; x++){
            element[x].style.pointerEvents = 'none';
        element[x].style.opacity = '.9';

            }
        document.querySelector('.button').style.display = 'block';

    }

    }
    // End of scoreboard conditions

    // Button to reset the cards to their original position
    document.querySelector('.button').addEventListener('click', function(){
        // Inside this loop, we'll return the pointer event and opacity of player cards to their original states
        for(let a = 0; a<element.length; a++){
            element[a].style.pointerEvents = 'visible';
            element[a].style.opacity = '1';
        }
        // Here we'll force toggle off the player cards with the false parameter.
        element[0].classList.toggle('active', false);
        element[1].classList.toggle('active', false);
        element[2].classList.toggle('active', false);

        // To display the button
        document.querySelector('.button').style.display = 'block';
        // To return random cards to their original state
        document.querySelector('.random-rock').style.transform = 'translateX(0vw) scaleX(-1)';        
        document.querySelector('.random-paper').style.transform = 'translateX(0vw) scaleX(-1)';      
        document.querySelector('.random-scissors').style.transform = 'translateX(0vw) scaleX(-1)';
        //To hide the button again, until a player card is selected again!    
        document.querySelector('.button').style.display = 'none';
        
    })
}

