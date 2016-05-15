#pragma strict

public var isQuitButton : boolean = false;

var theSkin1 : GUISkin;
var theSkin2 : GUISkin;
var score1 : int;
var	score2 : int;

function Awake() 
{
	DontDestroyOnLoad (gameObject);
}

function OnGUI () {

score1 = gameManager.scorePlayer01;
score2 = gameManager.scorePlayer02;
	
	
	GUI.skin = theSkin2;
	GUI.Label (new Rect ((Screen.width/2)-100, 50, 100, 100), "" + score1);
	GUI.Label (new Rect ((Screen.width/2)+80, 50, 100, 100), "" + score2);
	
	GUI.skin = theSkin1;
	
	if (AI.level == 0)
	{
		if (gameManager.scorePlayer01 > gameManager.scorePlayer02)
			GUI.Label (Rect ( (Screen.width/2)-80,(Screen.height/2)-100, 300 , 200),"Player one wins!");
		else 
			GUI.Label (Rect ( (Screen.width/2)-80,(Screen.height/2)-100, 300 , 200),"Player two wins!");
	}
	else
	{
		if (gameManager.scorePlayer01 > gameManager.scorePlayer02)
			GUI.Label (Rect ( (Screen.width/2)-80,(Screen.height/2)-120, 300 , 200),"Computer wins!!");
		else 
			GUI.Label (Rect ( (Screen.width/2)-60,(Screen.height/2)-120, 300 , 200),"Player wins!");
	}

	if (GUI.Button(Rect ( (Screen.width/2)-120, (Screen.height/2)-40, 240 , 60),"New Game"))
	{
		gameManager.scorePlayer01 = 0;
		gameManager.scorePlayer02 = 0;
		gameManager.gameOver = false;
		Destroy(gameObject);
		Application.LoadLevel(0);
	}
	if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)+40, 240 , 60),"Quit Game") ) 
	{
		Application.Quit();
	}
}