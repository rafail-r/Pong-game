#pragma strict

var ballSpeed : float = 300;

function Start () {
	yield WaitForSeconds (0.5);
	GoBall();

}

function ResetBall () {

	rigidbody2D.velocity.y = 0;
	rigidbody2D.velocity.x = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds (0.5);
	GoBall();
}

function GoBall () 
{
	if (gameManager.flag == 1) 
	{
		var randomNumber = Random.Range(0 ,0.8);
		if (randomNumber <= 0.4) 
		{
			rigidbody2D.AddForce (new Vector2 (350, 200));
		}
		else
		{
			rigidbody2D.AddForce (new Vector2 (350, -200));
		}
	}
	else if (gameManager.flag == 0)
	{
		randomNumber = Random.Range(0 ,0.8);
		if (randomNumber <= 0.4) 
		{
			rigidbody2D.AddForce (new Vector2 (-350, -200));
		}
		else
		{
			rigidbody2D.AddForce (new Vector2 (-350, 200));
		}
	}
	else 
	{
		randomNumber = Random.Range(0 ,1.6);
		if (randomNumber <= 0.4) 
		{
			rigidbody2D.AddForce (new Vector2 (350, 200));
		}
		else if ((randomNumber <= 0.8) && (randomNumber > 0.4)) 
		{
			rigidbody2D.AddForce (new Vector2 (350, -200));
		}
		else if ((randomNumber <= 1.2) && (randomNumber > 0.8)) 
		{
			rigidbody2D.AddForce (new Vector2 (-350, -200));
		}
		else
		{
			rigidbody2D.AddForce (new Vector2 (-350, 200));
		}
	}
}