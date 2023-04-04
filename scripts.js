//Personagens

const bob = document.querySelector('#bob');

const patrick = document.querySelector('#patrick');

const squid = document.querySelector('#squid');

const characters = [bob, patrick];

let stepLength = 1;

let keysPressed = {
    w: false,
    s: false,
    a: false,
    d: false,
    arrowUp: false,
    arrowDown: false,
    arrowLeft: false,
    arrowRight: false
}

//Inicialização

addEventListener("load", function(){
    bob.style.left = "46vh";
    bob.style.top = "48vh";
    patrick.style.left = "50vh";
    patrick.style.top = "48vh";

})

//Movimentos

addEventListener('keydown',function(e)
{
    e.preventDefault();

    switch(e.key){
        //Bob
        case 'ArrowLeft':
            keysPressed.arrowLeft = true;
        break;
        case'ArrowRight':
            keysPressed.arrowRight = true;
        break;
        case'ArrowUp':
            keysPressed.arrowUp = true;
        break;
        case'ArrowDown':
            keysPressed.arrowDown = true;
        break;
        //Patrick
        case'a':
            keysPressed.a = true;
        break;
        case'd':
            keysPressed.d = true;
        break;
        case'w':
            keysPressed.w = true;
        break;
        case's':
            keysPressed.s = true;
        break;
    }    
})

addEventListener('keyup',function(e)
{
    switch(e.key){
        //Bob
        case 'ArrowLeft':
            keysPressed.arrowLeft = false;
        break;
        case'ArrowRight':
            keysPressed.arrowRight = false;
        break;
        case'ArrowUp':
            keysPressed.arrowUp = false;
        break;
        case'ArrowDown':
            keysPressed.arrowDown = false;
        break;
        //Patrick
        case'a':
            keysPressed.a = false;
        break;
        case'd':
            keysPressed.d = false;
        break;
        case'w':
            keysPressed.w = false;
        break;
        case's':
            keysPressed.s = false;
        break;
    }

})


function moveCharacter()
{
    //patrick movements
    if (keysPressed.a && keysPressed.w)
    {
        if (parseInt(patrick.style.left) != 0)
        {    
            if(freeLeft(patrick))
            {
                patrick.style.left = parseInt(patrick.style.left) - stepLength + 'vh';
            }
        }
        if (parseInt(patrick.style.top) != 0) {
            if(freeTop(patrick))
            {
                patrick.style.top = parseInt(patrick.style.top) - stepLength + 'vh';
            }
        }
    }
    else if(keysPressed.a && keysPressed.s)
    {
        if (parseInt(patrick.style.left) != 0)
        {        
            if(freeLeft(patrick))
            {
                patrick.style.left = parseInt(patrick.style.left) - stepLength + 'vh';
            }
        }
        if(parseInt(patrick.style.top) != 96)
        {
            if(freeBottom(patrick))
            {
                patrick.style.top = parseInt(patrick.style.top) + stepLength + 'vh';
            }
        }
    }
    else if(keysPressed.d && keysPressed.w)
    {
        if (parseInt(patrick.style.left) != 96)
        {        
            if(freeRight(patrick))
            {
                patrick.style.left = parseInt(patrick.style.left) + stepLength + 'vh';
            }
        }
        if(parseInt(patrick.style.top) != 0)
        {
            if(freeTop(patrick))
            {
                patrick.style.top = parseInt(patrick.style.top) - stepLength + 'vh';
            }
        }

    }
    else if (keysPressed.d && keysPressed.s)
    {
        if (parseInt(patrick.style.left) != 96)
        {    
            if(freeRight(patrick))
            {
                patrick.style.left = parseInt(patrick.style.left) + stepLength + 'vh';
            }
        }
        if (parseInt(patrick.style.top) != 96)
        {
            if(freeBottom(patrick))
            {
                patrick.style.top = parseInt(patrick.style.top) + stepLength + 'vh';
            }
        }

    }
    else if (keysPressed.a)
    {
        if (parseInt(patrick.style.left) != 0) 
        {    
            if(freeLeft(patrick))
            {
                patrick.style.left = parseInt(patrick.style.left) - stepLength + 'vh';
            }
        }
    }
    else if (keysPressed.d)
    {
        if(parseInt(patrick.style.left) != 96)
        {
            if(freeRight(patrick))
            {
                patrick.style.left = parseInt(patrick.style.left) + stepLength + 'vh';
            }
        }
    }
    else if (keysPressed.w)
    {
        if (parseInt(patrick.style.top) != 0)
        {
            if(freeTop(patrick))
            {
                patrick.style.top = parseInt(patrick.style.top) - stepLength + 'vh';
            }
        }
    }
    else if(keysPressed.s)
    {
        if(parseInt(patrick.style.top) != 96)
        {
            if(freeBottom(patrick))
            {
                patrick.style.top = parseInt(patrick.style.top) + stepLength + 'vh';
            }
        }
    }
    //bob movements
    if(keysPressed.arrowLeft && keysPressed.arrowUp)
    {
        if (parseInt(bob.style.left) != 0)
        {
            if(freeLeft(bob))
            {
                bob.style.left = parseInt(bob.style.left) - stepLength + 'vh';
            }
        }
        if (parseInt(bob.style.top) != 0)
        {
            if(freeTop(bob))
            {
                bob.style.top = parseInt(bob.style.top) - stepLength + 'vh';
            }
        }
    }
    else if(keysPressed.arrowLeft && keysPressed.arrowDown)
    {
        if (parseInt(bob.style.left) != 0)
        {
            if(freeLeft(bob)){
                bob.style.left = parseInt(bob.style.left) - stepLength + 'vh';
            }
        }
        if (parseInt(bob.style.top) != 96)
        {
            if(freeBottom(bob))
            {
                bob.style.top = parseInt(bob.style.top) + stepLength + 'vh';
            }
        }
    }
    else if (keysPressed.arrowRight && keysPressed.arrowUp)
    {    
        if(parseInt(bob.style.left) != 96)
        {        
            if(freeRight(bob))
            {
                bob.style.left = parseInt(bob.style.left) + stepLength + 'vh';
            }
        }
        if (parseInt(bob.style.top) != 0)
        {
            if(freeTop(bob))
            {
                bob.style.top = parseInt(bob.style.top) - stepLength + 'vh';
            }
        }

    }
    else if (keysPressed.arrowRight && keysPressed.arrowDown)
    {
        if (parseInt(bob.style.left) != 96)
        {   
            if(freeRight(bob))
            {
                bob.style.left = parseInt(bob.style.left) + stepLength + 'vh';
            }
        }
        if (parseInt(bob.style.top) != 96)
        {
            if(freeBottom(bob))
            {
                bob.style.top = parseInt(bob.style.top) + stepLength + 'vh';
            }
        }
    }
    else if (keysPressed.arrowLeft)
    {
        if (parseInt(bob.style.left) != 0)
        {
            if(freeLeft(bob)){
                bob.style.left = parseInt(bob.style.left) - stepLength + 'vh';
            }
        }
    }
    else if(keysPressed.arrowRight)
    {
        if(parseInt(bob.style.left) != 96)
        {   
            if(freeRight(bob))
            {
                bob.style.left = parseInt(bob.style.left) + stepLength + 'vh';
            }
        }
    }
    else if(keysPressed.arrowUp)
    {
        if (parseInt(bob.style.top) != 0)
        {
            if(freeTop(bob))
            {
                bob.style.top = parseInt(bob.style.top) - stepLength + 'vh';
            }
        }
    }
    else if(keysPressed.arrowDown)
    {
        if(parseInt(bob.style.top) != 96)
        {
            if(freeBottom(bob))
            {
                bob.style.top = parseInt(bob.style.top) + stepLength + 'vh';
            }
        }
    }

}

setInterval(moveCharacter,40);


function freeBottom(char)
{
    let score = 0;
    let currentIndex = characters.indexOf(char)
    let charLeng = characters.length;
    let charLeft = parseInt(char.style.left);
    let charTop = parseInt(char.style.top);

    for(i = 0; i < charLeng; i++)
    {
        if(i == currentIndex){
            continue;
        }
        let otherCharacter = characters[i];
        let otherLeft = parseInt(otherCharacter.style.left);
        let otherTop = parseInt(otherCharacter.style.top);
        if(charTop != otherTop - 4 || charLeft >= (otherLeft + 4) || charLeft <= (otherLeft - 4))
        {
            score++;
        }
    }
    if(score == charLeng - 1)
    {
        return true;
    }
    else return false;
}

function freeTop(char)
{
    let score = 0;
    let currentIndex = characters.indexOf(char)
    let charLeng = characters.length;
    let charLeft = parseInt(char.style.left);
    let charTop = parseInt(char.style.top);

    for(i = 0; i < charLeng; i++)
    {
        if(i == currentIndex){
            continue;
        }
        let otherCharacter = characters[i];
        let otherLeft = parseInt(otherCharacter.style.left);
        let otherTop = parseInt(otherCharacter.style.top);
        if(charTop != otherTop + 4 || charLeft >= (otherLeft + 4) || charLeft <= (otherLeft - 4))
        {
            score++;
        }
    }
    if(score == charLeng - 1)
    {
        return true;
    }
    else return false;
}

function freeLeft(char)
{
    let score = 0;
    let currentIndex = characters.indexOf(char)
    let charLeng = characters.length;
    let charLeft = parseInt(char.style.left);
    let charTop = parseInt(char.style.top);

    for(i = 0; i < charLeng; i++)
    {
        if(i == currentIndex){
            continue;
        }
        let otherCharacter = characters[i];
        let otherLeft = parseInt(otherCharacter.style.left);
        let otherTop = parseInt(otherCharacter.style.top);
        if(charLeft != otherLeft + 4 || charTop >= (otherTop + 4) || charTop <= (otherTop - 4))
        {
            score++;
        }
    }
    if(score == charLeng - 1)
    {
        return true;
    }
    else return false;
}

function freeRight(char)
{
    let score = 0;
    let currentIndex = characters.indexOf(char)
    let charLeng = characters.length;
    let charLeft = parseInt(char.style.left);
    let charTop = parseInt(char.style.top);

    for(i = 0; i < charLeng; i++)
    {
        if(i == currentIndex){
            continue;
        }
        let otherCharacter = characters[i];
        let otherLeft = parseInt(otherCharacter.style.left);
        let otherTop = parseInt(otherCharacter.style.top);
        if(charLeft != otherLeft - 4 || charTop >= (otherTop + 4) || charTop <= (otherTop - 4))
        {
            score++;
        }
    }
    if(score == charLeng - 1)
    {
        return true;
    }
    else return false;
}
