// script.js
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const clickSound = new Audio('click.wav'); // Replace with the path to your sound file

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('show');
  clickSound.play(); // Play sound on click

  clickSound.currentTime = 0; // Restart sound if already playing
  clickSound.play();

});
