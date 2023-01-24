function showContent(tabNum) {
  var content = document.getElementById("content-" + tabNum);
  var plusSign = document.getElementById("plus-sign-" + tabNum);
  var contents = document.getElementsByClassName("content");
  var plusSigns = document.getElementsByClassName("plus-sign");
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === "content-" + tabNum) {
      if (content.classList.contains("hide")) {
        contents[i].classList.remove("hide");
        contents[i].classList.add("show");
        plusSigns[i].style.transform = "rotate(45deg)";
      } else {
        contents[i].classList.remove("show");
        contents[i].classList.add("hide");
        plusSigns[i].style.transform = "rotate(0deg)";
      }
    }
  }
}



let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 50;
const particles = [];

const possibleColors = [
  "#00B0A9",
  "#552FEA",
  "#D3D800",
  "#77EE79",
  "#FB00A7"
 ];
 
 function randomFromTo(from, to) {
   return Math.floor(Math.random() * (to - from + 1) + from);
 }
 
 function confettiParticle() {
   this.x = Math.random() * W; // x
   this.y = Math.random() * H - H; // y
   this.r = 90;
   this.d = Math.random() * maxConfettis + 11;
   this.height = randomFromTo(1,40); // new height variable
   this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
   this.tilt = Math.random() * (180) - 90; // tilt to random numbers
   this.tiltAngleIncremental = Math.random() * 0.05 + -0.05;
   this.tiltAngle = 0;
   this.rotation = Math.random() * (360) - 180; // rotation of confetti
 
   this.draw = function() {
     context.save();
     context.translate(this.x + this.tilt + this.d / 3, this.y);
     context.rotate(this.rotation);
     context.beginPath();
     context.strokeStyle = this.color;
     context.lineWidth = this.r / 11;
     context.moveTo(0,0);
     context.lineTo(this.tilt, this.height);
 
     context.stroke();
     context.restore();
   };
 }
 
 function Draw() {
   const results = [];
 
   // Magical recursive functional love
   requestAnimationFrame(Draw);
 
   context.clearRect(0, 0, W, window.innerHeight);
 
   for (var i = 0; i < maxConfettis; i++) {
     results.push(particles[i].draw());
   }
 
   let particle = {};
   let remainingFlakes = 0;
   for (var i = 0; i < maxConfettis; i++) {
     particle = particles[i];
 
     particle.tiltAngle += particle.tiltAngleIncremental;
     particle.y += (Math.cos(particle.d) + 5 + particle.d / 4) / 4;
 
     if (particle.y <= H) remainingFlakes++;
 
     // If a confetti has fluttered out of view,
     // bring it back to above the viewport and let if re-fall.
     if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
       particle.x = Math.random() * W;
       particle.y = -30;
     }
   }
 
   return results;
 }
 
 window.addEventListener(
   "resize",
   function() {

     W = window.innerWidth;
     H = window.innerHeight;
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
   },
   false
 );
 
 // Push new confetti objects to `particles[]`
 for (var i = 0; i < maxConfettis; i++) {
   particles.push(new confettiParticle());
 }
 
 // Initialize
 canvas.width = W;
 canvas.height = H;
 Draw();


 