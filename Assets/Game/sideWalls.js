#pragma strict

 function OnTriggerEnter2D (hitInfo : Collider2D) {
	if (hitInfo.name == "Sphere")
	{
		var wallName = transform.name;
		gameManager.Score (wallName);
		hitInfo.gameObject.SendMessage ("ResetBall");
		//ballControl.ResetBall ();
		audio.Play();
	}
}