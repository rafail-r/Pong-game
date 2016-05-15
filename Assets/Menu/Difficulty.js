#pragma strict

function OnGUI () {

	if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)-140, 240 , 60),"Easy") ) {
		AI.level = 1;
		Application.LoadLevel(3);
	}
	if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)-60, 240 , 60),"Medium") ) {
		AI.level = 2;
		Application.LoadLevel(3);
	}
	if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)+20, 240 , 60),"Hard") ) {
		AI.level = 3;
		Application.LoadLevel(3);
	}
	if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)+100, 240 , 60),"Go Back") ) 
	{
		Application.LoadLevel(1);
	}
}
			