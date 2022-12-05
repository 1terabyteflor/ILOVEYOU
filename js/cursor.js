var mouse1, mouse2, mouse3; 
var d1, d2; 

function setup() {
	mouse1 = "%,!!"
	mouse2 = "_?#;";
	mouse3 = ");<%";
	d1 = windowHeight/3; 
	d2 = 2*d1; 
}

function draw() {
	if (mouseY<d1) { 
		cursor(mouse1,mouseX,mouseY);
	}
	else if (mouseY<d2) {
		cursor(mouse2,mouseX,mouseY);
	}
	else {
		cursor(mouse3,mouseX,mouseY);
	}
}