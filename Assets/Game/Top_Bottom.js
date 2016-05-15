#pragma strict

function OnCollisionEnter2D(collision : Collision2D)
{
	audio.pitch = Random.Range(0.8f, 1.2f);
	audio.Play();
}