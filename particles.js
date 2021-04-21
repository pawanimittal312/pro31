  
class Particle{
	constructor(x,y,r)
	{
		var options={
			//isStatic:true,
			restitution :0.4
           // friction :1,
			}
		
		this.r=r
		//this.image=loadImage("images/mango.png")
		this.body=Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var Pos=this.body.position;
       // var angle=this.body.angle
		push()
		translate(Pos.x,Pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		//fill(255,0,255)
		//imageMode(CENTER);
		ellipseMode(RADIUS);
	//	image(this.image, 0,0,this.r*2, this.r*2)
    ellipse(0,0,this.r,this.r)
		pop()
 }
}