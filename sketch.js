// Sets the colors of the moving circles.
let color = ["red", "blue", "yellow", "green"];

// Sets the coordinates of the moving circles.
let m = [0, 600, 800, -600];

// Lines 47-85 are new lines of code added for Unit 3 Coding Challenge.

let colors = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background("white");
  noStroke();

  // Adds circles for the first three rows. I used Example 4-10 for reference. I also received extra help on how to skip the middle column.
  for (let x = 50; x < 400; x += 50) {
    if (x == 200) {
    } else {
      for (let y = 50; y < 200; y += 50) {
        fill(x, 100, 100);
        circle(x, y, 45);
      }
    }
  }

  // Circles for the last 3 rows and skips the middle column.
  for (let x = 50; x < 400; x += 50) {
    if (x == 200) {
    } else {
      for (let y = 350; y > 200; y -= 50) {
        fill(x + 30, 100, 100);
        circle(x, y, 45);
      }
    }
  }

  // Adds two rectangles on the middle row and middle column.
  rectMode(CENTER);
  fill(0, 100, 0, 0.25);
  rect(200, 200, 45, 400);
  fill(0, 100, 0, 0.25);
  rect(200, 200, 400, 45);

  // Makes each circle move to the center one at a time.
  for (let i = 200; i <= 200; i++) {
    fill(color[0]);
    circle(i, m[0], 30);
  }
  if (m[0] > 200) {
    m[0] = -600;
  }
  for (let i = 200; i <= 200; i++) {
    fill(color[1]);
    circle(m[1], i, 30);
  }
  if (m[1] < 200) {
    m[1] = 1000;
  }
  for (let i = 200; i <= 200; i++) {
    fill(color[2]);
    circle(i, m[2], 30);
  }
  if (m[2] < 200) {
    m[2] = 1000;
  }
  for (let i = 200; i <= 200; i++) {
    fill(color[3]);
    circle(m[3], i, 30);
  }
  if (m[3] > 200) {
    m[3] = -600;
  }

  // Center square changes color when the cursor hovers over it.
  if (mouseX > 177.5 && mouseX < 222.5 && mouseY > 177.5 && mouseY < 222.5) {
    fill(colors % 360, 100, 100);
  } else {
    fill("white");
  }
  // Adds a white square in the center.
  rect(200, 200, 45, 45);

  // Border
  rectMode(CORNER);
  fill(30, 80, 100);
  rect(0, 0, 25, 400);
  rect(0, 0, 400, 25);
  rect(375, 0, 25, 400);
  rect(0, 375, 400, 25);

  colors++;
  m[0]++;
  m[1]--;
  m[2]--;
  m[3]++;
}
