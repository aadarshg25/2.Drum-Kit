//The addEventListener() method of the EventTarget interface sets up a function that will be called 
//whenever the specified event is delivered to the targe
//syntax : element.addEventListener(event, function, useCapture)
//----------------------------------------------------------------------------------
// play a sound or audio :
//The Audio() constructor creates and returns a new HTMLAudioElement 
//which can be either attached to a document for the user to interact with 
//and/or listen to, or can be used offscreen to manage and play audio.
// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();
//-----------------------------------------------------------------------------------------------------------------------
// document .querySelector("button").addEventListener("click",function (){     // we can also call an anonmus function                                          
//     alert("I got clicked !");
// });
//------------------------------------------------------------------------------------------------------------------------
// document .querySelector("button").addEventListener("click",handleClick); // notice here we have given the fuction name as input
function MakeSound(key){                                                  //so it doent call the funnction there only

//  this.style.color = "white"; this keyword points to the current object
//now there are multiple buttons and each has it its unnique sound so we use switch  statement
switch (key) {
    case "w":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    case "a":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    case "s":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
    case "d":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    case "j":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case "k":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
    case "l":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
}
}
//-----------------------------------------------------------------------------------------------------------------------------
//keyboard press
// document.addEventListener("keypress",function(event){ // we attach the event lisner to the entire doc do that the whole webpage listens
//                                                  //here keydown can be used insted of keypress
//                                                  // the event parameter tells which event has  taken place
//     console.log(event);
//     alert("A key is pressed")  // we use event.key to find the key being pressed 
// })
//-------------------------------------------------------------------------------------------------------------------------------
for(var i = 0;i< document.querySelectorAll("button").length;i++){
    
document .querySelectorAll("button")[i].addEventListener("click",function(){ // this is attacted to only buttons clicks
    var buttonPressed = this.innerHTML;
    MakeSound(buttonPressed); // this is for sound
    buttonAnimation(buttonPressed); // this is for button animation
});
}

document.addEventListener("keypress",function(event){ // remeber to attact keyboard press to whole doc
    var keyPressed = event.key;
    MakeSound(keyPressed);
    buttonAnimation(keyPressed);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." +currentKey);
    activeButton.classList.add("pressed");

    // now out task is to remove the class we added so it looks like an animated way
    //Syntax : setTimeout(function, milliseconds, param1, param2, ...
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
}

