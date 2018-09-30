// const myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello world!";

// document.querySelector('html').onclick = () => {
//   alert('Ouch! Stop poking me!');
//   console.log('warning sent');
// }

const myImage = document.querySelector('img');

myImage.onmouseover = changeLogo;
myImage.onmouseout = changeLogo;

function changeLogo() {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox_logo.png') {
    myImage.setAttribute('src', 'images/firefox_logo2.png')
  } else {
    myImage.setAttribute('src', 'images/firefox_logo.png')
  }
}

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => setUserName();
