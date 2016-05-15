#pragma strict 
var speed : float = 7.5;
private var ball : Transform;

static var level : int;

function Update ()
{
	if (level == 0)
	{
		if ( Input.GetKey("w") && (this.transform.position.y < 3.35) )
		{
			this.transform.position.y += this.speed * Time.deltaTime;
		}
		if ( Input.GetKey("s") && (this.transform.position.y > -3.35) )
		{
			this.transform.position.y -= this.speed * Time.deltaTime;
		}
	}
	if (level == 1) 
	{
		ball = GameObject.FindWithTag("ball").transform;
		if (transform.position.y < ball.position.y)
			transform.position = Vector2.MoveTowards(transform.position, Vector2(-6, 3.35), (speed - 4.0) * Time.deltaTime);
		if (transform.position.y > ball.position.y)
			transform.position = Vector2.MoveTowards(transform.position, Vector2(-6, -3.35), (speed - 4.0) * Time.deltaTime);
	}
	else if (level == 2)
	{
		ball = GameObject.FindWithTag("ball").transform;
		if (transform.position.y < ball.position.y)
			transform.position = Vector2.MoveTowards(transform.position, Vector2(-6, 3.35), (speed - 3.2) * Time.deltaTime);
		if (transform.position.y > ball.position.y)
			transform.position = Vector2.MoveTowards(transform.position, Vector2(-6, -3.35), (speed - 3.2) * Time.deltaTime);
	}
	else if (level == 3)
	{
		ball = GameObject.FindWithTag("ball").transform;
		if (transform.position.y < (ball.position.y - 0.5))
			transform.position = Vector2.MoveTowards(transform.position, Vector2(-6, 3.35), speed * Time.deltaTime);
		if (transform.position.y > (ball.position.y + 0.5))
			transform.position = Vector2.MoveTowards(transform.position, Vector2(-6, -3.35), speed * Time.deltaTime);
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