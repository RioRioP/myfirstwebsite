// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_4235.GIF') {
      myImage.setAttribute ('src','images/IMG_4234.GIF');
    } else {
      myImage.setAttribute ('src','images/IMG_4235.GIF');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    // let myName = prompt('Please enter your name.');
    // if(!myName) {
    //     setUserName();
    //   } else {
    //     localStorage.setItem('name', myName);
    //     myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    //   }
    myHeading.innerHTML = 'Website?';
  }
if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }