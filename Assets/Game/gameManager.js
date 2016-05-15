#pragma strict

static var scorePlayer01 : int = 0;
static var scorePlayer02 : int = 0;
static var flag : int = 2;

var winningScore : int = 10;

var theSkin : GUISkin;

static var gameOver : boolean = false;

function Update() {
	if (scorePlayer01 >= winningScore || scorePlayer02 >= winningScore) gameOver = true;
	if (gameOver && Application.loadedLevel != "GameOver")	Application.LoadLevel("GameOver");
}

static function Score (wallName : String) {
	if (wallName == "rightWall") {
		scorePlayer01 += 1;
		flag = 0;
	}
	else if (wallName == "leftWall") {
		scorePlayer02 += 1;
		flag = 1;
	}
}

function OnGUI () {
	GUI.skin = theSkin;
	GUI.Label (new Rect ((Screen.width/2)-100, 50, 100, 100), "" + scorePlayer01);
	GUI.Label (new Rect ((Screen.width/2)+80, 50, 100, 100), "" + scorePlayer02);
}