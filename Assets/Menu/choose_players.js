#pragma strict

function OnGUI () {

	if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)-100, 240 , 60),"1-Player") ) 
	{
		Application.LoadLevel(2);
	}
	if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)-20, 240 , 60),"2-Players") ) 
	{
		AI.level = 0;
		Application.LoadLevel(3);
	}
	if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)+60, 240 , 60),"Go Back") ) 
	{
		Application.LoadLevel(0);
	}

}