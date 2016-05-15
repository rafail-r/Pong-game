using UnityEngine;
using System.Collections;

public class MainMenu : MonoBehaviour {
	public Texture bgtexture;
	public bool isQuitButton = false;

	void OnGUI(){
		GUI.DrawTexture (new Rect (0, 0, Screen.width, Screen.height), bgtexture);

		if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)-60, 240 , 60),"Play Game") ) {
			Application.LoadLevel(1);
		}
		if (GUI.Button (new Rect ( (Screen.width/2)-120, (Screen.height/2)+25, 240 , 60),"Quit Game") ) {
			Application.Quit();
		}
	}
}
