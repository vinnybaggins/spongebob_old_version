const bob = document.querySelector('#bob');

const patrick = document.querySelector('#patrick');

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

addEventListener("load", function(){
    bob.style.left = "46vh";
    bob.style.top = "48vh";
    patrick.style.left = "50vh";
    patrick.style.top = "48vh";

})

addEventListener('keydown',function(e){
    if(e.key != "F5"){
    e.preventDefault();
    console.log(e.key);
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
    }
})

addEventListener('keyup',function(e){

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


setInterval(moveCharacter,30);

function moveCharacter() {

    if (keysPressed.a && keysPressed.w) {

        if (parseInt(patrick.style.left) != 0) {
                
            if(parseInt(patrick.style.left) != parseInt(bob.style.left) + 4 || parseInt(patrick.style.top) >= (parseInt(bob.style.top) + 4) || parseInt(patrick.style.top) <= (parseInt(bob.style.top) - 4)){
                patrick.style.left = parseInt(patrick.style.left) - stepLength + 'vh';
            }

        }
        if (parseInt(patrick.style.top) != 0) {

            if(parseInt(patrick.style.top) != parseInt(bob.style.top) + 4 || parseInt(patrick.style.left) >= (parseInt(bob.style.left) + 4) || parseInt(patrick.style.left) <= (parseInt(bob.style.left) - 4)){
                patrick.style.top = parseInt(patrick.style.top) - stepLength + 'vh';
            }
        }

    } else if (keysPressed.a && keysPressed.s) {

        if (parseInt(patrick.style.left) != 0) {
                
            if(parseInt(patrick.style.left) != parseInt(bob.style.left) + 4 || parseInt(patrick.style.top) >= (parseInt(bob.style.top) + 4) || parseInt(patrick.style.top) <= (parseInt(bob.style.top) - 4)){
                patrick.style.left = parseInt(patrick.style.left) - stepLength + 'vh';
            }

        }
        if (parseInt(patrick.style.top) != 96) {

            if(parseInt(patrick.style.top) != parseInt(bob.style.top) - 4 || parseInt(patrick.style.left) >= (parseInt(bob.style.left) + 4) || parseInt(patrick.style.left) <= (parseInt(bob.style.left) - 4)){
                patrick.style.top = parseInt(patrick.style.top) + stepLength + 'vh';
            }
            
        }

    } else if (keysPressed.d && keysPressed.w) {

        if (parseInt(patrick.style.left) != 96) {
                
                if(parseInt(patrick.style.left) != parseInt(bob.style.left) - 4 || parseInt(patrick.style.top) >= (parseInt(bob.style.top) + 4) || parseInt(patrick.style.top) <= (parseInt(bob.style.top) - 4)){
                    patrick.style.left = parseInt(patrick.style.left) + stepLength + 'vh';
                }

        }
        if (parseInt(patrick.style.top) != 0) {

            if(parseInt(patrick.style.top) != parseInt(bob.style.top) + 4 || parseInt(patrick.style.left) >= (parseInt(bob.style.left) + 4) || parseInt(patrick.style.left) <= (parseInt(bob.style.left) - 4)){
                patrick.style.top = parseInt(patrick.style.top) - stepLength + 'vh';
            }
        }

    } else if (keysPressed.d && keysPressed.s) {

        if (parseInt(patrick.style.left) != 96) {
                
                if(parseInt(patrick.style.left) != parseInt(bob.style.left) - 4 || parseInt(patrick.style.top) >= (parseInt(bob.style.top) + 4) || parseInt(patrick.style.top) <= (parseInt(bob.style.top) - 4)){
                    patrick.style.left = parseInt(patrick.style.left) + stepLength + 'vh';
                }

        }
        if (parseInt(patrick.style.top) != 96) {

            if(parseInt(patrick.style.top) != parseInt(bob.style.top) - 4 || parseInt(patrick.style.left) >= (parseInt(bob.style.left) + 4) || parseInt(patrick.style.left) <= (parseInt(bob.style.left) - 4)){
                patrick.style.top = parseInt(patrick.style.top) + stepLength + 'vh';
            }
            
        }

    } else if (keysPressed.a) {

        if (parseInt(patrick.style.left) != 0) {
                
            if(parseInt(patrick.style.left) != parseInt(bob.style.left) + 4 || parseInt(patrick.style.top) >= (parseInt(bob.style.top) + 4) || parseInt(patrick.style.top) <= (parseInt(bob.style.top) - 4)){
                patrick.style.left = parseInt(patrick.style.left) - stepLength + 'vh';
            }

        }

    } else if (keysPressed.d) {

        if (parseInt(patrick.style.left) != 96) {
                
                if(parseInt(patrick.style.left) != parseInt(bob.style.left) - 4 || parseInt(patrick.style.top) >= (parseInt(bob.style.top) + 4) || parseInt(patrick.style.top) <= (parseInt(bob.style.top) - 4)){
                    patrick.style.left = parseInt(patrick.style.left) + stepLength + 'vh';
                }

        }

    } else if (keysPressed.w) {

        if (parseInt(patrick.style.top) != 0) {

            if(parseInt(patrick.style.top) != parseInt(bob.style.top) + 4 || parseInt(patrick.style.left) >= (parseInt(bob.style.left) + 4) || parseInt(patrick.style.left) <= (parseInt(bob.style.left) - 4)){
                patrick.style.top = parseInt(patrick.style.top) - stepLength + 'vh';
            }
        }
        

    } else if (keysPressed.s) {

        if (parseInt(patrick.style.top) != 96) {

            if(parseInt(patrick.style.top) != parseInt(bob.style.top) - 4 || parseInt(patrick.style.left) >= (parseInt(bob.style.left) + 4) || parseInt(patrick.style.left) <= (parseInt(bob.style.left) - 4)){
                patrick.style.top = parseInt(patrick.style.top) + stepLength + 'vh';
            }
            
        }

    }

    if (keysPressed.arrowLeft && keysPressed.arrowUp) {

            if (parseInt(bob.style.left) != 0) {
                if(parseInt(bob.style.left) != parseInt(patrick.style.left) + 4 || parseInt(bob.style.top) >= (parseInt(patrick.style.top) + 4) || parseInt(bob.style.top) <= (parseInt(patrick.style.top) - 4)){
                    bob.style.left = parseInt(bob.style.left) - stepLength + 'vh';
                }
            }
            if (parseInt(bob.style.top) != 0) {
                if(parseInt(bob.style.top) != parseInt(patrick.style.top) + 4 || parseInt(bob.style.left) >= (parseInt(patrick.style.left) + 4) || parseInt(bob.style.left) <= (parseInt(patrick.style.left) - 4)){
                    bob.style.top = parseInt(bob.style.top) - stepLength + 'vh';
                }
            }
        
    } else if (keysPressed.arrowLeft && keysPressed.arrowDown) {

        if (parseInt(bob.style.left) != 0) {
                
            if(parseInt(bob.style.left) != parseInt(patrick.style.left) + 4 || parseInt(bob.style.top) >= (parseInt(patrick.style.top) + 4) || parseInt(bob.style.top) <= (parseInt(patrick.style.top) - 4)){
                bob.style.left = parseInt(bob.style.left) - stepLength + 'vh';
            }

        }
        if (parseInt(bob.style.top) != 96) {

            if(parseInt(bob.style.top) != parseInt(patrick.style.top) - 4 || parseInt(bob.style.left) >= (parseInt(patrick.style.left) + 4) || parseInt(bob.style.left) <= (parseInt(patrick.style.left) - 4)){
                bob.style.top = parseInt(bob.style.top) + stepLength + 'vh';
            }
            
        }

    } else if (keysPressed.arrowRight && keysPressed.arrowUp) {
        
        if (parseInt(bob.style.left) != 96) {
                
                if(parseInt(bob.style.left) != parseInt(patrick.style.left) - 4 || parseInt(bob.style.top) >= (parseInt(patrick.style.top) + 4) || parseInt(bob.style.top) <= (parseInt(patrick.style.top) - 4)){
                    bob.style.left = parseInt(bob.style.left) + stepLength + 'vh';
                }

        }
        if (parseInt(bob.style.top) != 0) {

            if(parseInt(bob.style.top) != parseInt(patrick.style.top) + 4 || parseInt(bob.style.left) >= (parseInt(patrick.style.left) + 4) || parseInt(bob.style.left) <= (parseInt(patrick.style.left) - 4)){
                bob.style.top = parseInt(bob.style.top) - stepLength + 'vh';
            }
        }

    } else if (keysPressed.arrowRight && keysPressed.arrowDown) {

        if (parseInt(bob.style.left) != 96) {
                
                if(parseInt(bob.style.left) != parseInt(patrick.style.left) - 4 || parseInt(bob.style.top) >= (parseInt(patrick.style.top) + 4) || parseInt(bob.style.top) <= (parseInt(patrick.style.top) - 4)){
                    bob.style.left = parseInt(bob.style.left) + stepLength + 'vh';
                }

        }
        if (parseInt(bob.style.top) != 96) {

            if(parseInt(bob.style.top) != parseInt(patrick.style.top) - 4 || parseInt(bob.style.left) >= (parseInt(patrick.style.left) + 4) || parseInt(bob.style.left) <= (parseInt(patrick.style.left) - 4)){
                bob.style.top = parseInt(bob.style.top) + stepLength + 'vh';
            }
            
        }

    } else if (keysPressed.arrowLeft) {

        if (parseInt(bob.style.left) != 0) {
                
            if(parseInt(bob.style.left) != parseInt(patrick.style.left) + 4 || parseInt(bob.style.top) >= (parseInt(patrick.style.top) + 4) || parseInt(bob.style.top) <= (parseInt(patrick.style.top) - 4)){
                bob.style.left = parseInt(bob.style.left) - stepLength + 'vh';
            }

        }

    } else if (keysPressed.arrowRight) {

        if (parseInt(bob.style.left) != 96) {
                
                if(parseInt(bob.style.left) != parseInt(patrick.style.left) - 4 || parseInt(bob.style.top) >= (parseInt(patrick.style.top) + 4) || parseInt(bob.style.top) <= (parseInt(patrick.style.top) - 4)){
                    bob.style.left = parseInt(bob.style.left) + stepLength + 'vh';
                }

        }

    } else if (keysPressed.arrowUp) {

        if (parseInt(bob.style.top) != 0) {

            if(parseInt(bob.style.top) != parseInt(patrick.style.top) + 4 || parseInt(bob.style.left) >= (parseInt(patrick.style.left) + 4) || parseInt(bob.style.left) <= (parseInt(patrick.style.left) - 4)){
                bob.style.top = parseInt(bob.style.top) - stepLength + 'vh';
            }
        }

    } else if (keysPressed.arrowDown) {

        if (parseInt(bob.style.top) != 96) {

            if(parseInt(bob.style.top) != parseInt(patrick.style.top) - 4 || parseInt(bob.style.left) >= (parseInt(patrick.style.left) + 4) || parseInt(bob.style.left) <= (parseInt(patrick.style.left) - 4)){
                bob.style.top = parseInt(bob.style.top) + stepLength + 'vh';
            }
            
        }

    }

}
