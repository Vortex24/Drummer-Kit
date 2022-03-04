var i = 0;
while (i < document.querySelectorAll(".drum").length)    //we use class drum instead of type "button" bcoz we can have more buttons in our program
{
  document.querySelectorAll("button")[i].addEventListener("click", After_Click);   //After_Click function will be call after the button is clicked
  i++;
}
function After_Click()
{
  handleSound(this.innerHTML);
  handleAnimation(this.innerHTML);
}
document.addEventListener("keydown", function(event) {                    // listening to the pressed keys
  handleSound(event.key);
  handleAnimation(event.key);
});

function handleAnimation(ch)                                
{                                                                         // Added the class name as the character name itself,
  document.querySelector("." + ch).classList.add("pressed");              // which makes it easy for me to select that particular element 
  setTimeout(function() {
    document.querySelector("." + ch).classList.remove("pressed");         // for delay of 0.1 seconds 
  }, 100);
}

function handleSound(ch)
{
  switch (ch)
  {
    case "w" : var audio1 = new Audio("sounds/tom-1.mp3");                // adding audio to buttons
               audio1.play();
               break;
    case "a" : var audio2 = new Audio("sounds/tom-2.mp3");
               audio2.play();
               break;
    case "s" : var audio3 = new Audio("sounds/tom-3.mp3");
               audio3.play();
               break;
    case "d" : var audio4 = new Audio("sounds/tom-4.mp3");
               audio4.play();
               break;
    case "j" : var audio5 = new Audio("sounds/crash.mp3");
               audio5.play();
               break;
    case "k" : var audio6 = new Audio("sounds/kick-bass.mp3");
               audio6.play();
               break;
    case "l" : var audio7 = new Audio("sounds/snare.mp3");
               audio7.play();
               break;
    default  : console.log (ch);                              // if anything other than the selected keys is pressed
  }
}
