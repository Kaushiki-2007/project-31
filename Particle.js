class Particle{
    constructor(x, y,r) {
        var options = {
            'restitution':0.4,
            'friction':0,
            'density':1.0
        }
        this.r=r;
        this.body = Bodies.circle(x, y,this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color);
       ellipseMode(RADIUS);
        ellipse ( 0, 0,this.r,this.r);
        pop();
      }
}