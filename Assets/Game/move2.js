#pragma strict

var speed : float = 7.5;

function Update () 
{
	if ( Input.GetKey("k") && (this.transform.position.y < 3.35) )
	{
		this.transform.position.y += this.speed * Time.deltaTime;
	}
	if ( Input.GetKey("m") && (this.transform.position.y > -3.35) )
	{
		this.transform.position.y -= this.speed * Time.deltaTime;
	}
}

function OnCollisionEnter2D(collision : Collision2D)
{
	var velo = collision.rigidbody.velocity.magnitude;
	collision.rigidbody.velocity.y = (collision.transform.position.y - transform.position.y)*12;
	if (collision.rigidbody.velocity.y > 7.5) 
		collision.rigidbody.velocity.y = 7.5;
	else if (collision.rigidbody.velocity.y < -7.5)
		collision.rigidbody.velocity.y = -7.5;
	if (collision.rigidbody.velocity.x < 7 && collision.rigidbody.velocity.x > 0) 
		collision.rigidbody.velocity.x = 7;
	else if (collision.rigidbody.velocity.x > -7 && collision.rigidbody.velocity.x < 0)
		collision.rigidbody.velocity.x = -7;
	audio.pitch = Random.Range(0.8f, 1.2f);
	audio.Play();
}