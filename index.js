//alert("Hello");

var allDrums = document.querySelectorAll(".nav-btn")

function buttonAnimation(currentKey) {
  //currentKey is var buttonClass.
  //this get hold of the HTML Object.
  var activeButton = document.querySelector("." + currentKey);
  //this add class to that object
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}



function handleClick(something) {

  switch (something) {
    case "ABOUT":
      var soundOne = new Audio("sounds/nav-1.mp3");
      soundOne.play();
      setTimeout(function () {
        window.location.href = "index.html";
      }, 500);
      break;

    case "BOOKS":
      var soundTwo = new Audio("sounds/nav-2.mp3");
      soundTwo.play();
      setTimeout(function () {
        window.location.href = "books.html";
      }, 500);
      break;

    case "EVENTS":
      var soundThree = new Audio("sounds/nav-3.mp3");
      soundThree.play();
      setTimeout(function () {
        window.location.href = "events.html";
      }, 500);
      break;

    case "WORK":
      var soundFour = new Audio("sounds/nav-4.mp3");
      soundFour.play();
      setTimeout(function () {
        window.location.href = "work.html";
      }, 500);
      break;

    case "CONTACT":
      var soundFive = new Audio("sounds/nav-5.mp3");
      soundFive.play();
      setTimeout(function () {
        window.location.href = "contact.html";
      }, 500);
      break;
    default: console.log(buttonInnerHTML);
  }
}


for (var i = 0; i < allDrums.length; i++) {
  allDrums[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    handleClick(buttonInnerHTML);
    var buttonClass = buttonInnerHTML.toLowerCase();
    buttonAnimation(buttonClass);
  });

}

