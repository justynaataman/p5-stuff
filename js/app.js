function setup() {
    

createCanvas(displayWidth, displayHeight);


  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(100, 100, 16);
    } else {
      fill(200, 50, 20);
    }
    ellipse(mouseX, mouseY, 60, 60);
  }