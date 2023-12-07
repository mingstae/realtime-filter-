function preload() {
}

function setup() {
  canvas = createCanvas(600, 600);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 150, 150, 300, 300);
  tint(tint_color);
  fill("green");
  rect(20, 20, 560, 20);
  rect(20, 560, 560, 20);
  rect(20, 20, 20, 560);
  rect(560, 20, 20, 560);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

