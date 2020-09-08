class Paper{
  constructor(x, y, radius, options) {
    var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.body = Matter.Bodies.circle(x, y, radius, options);
        
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    fill(254, 0, 252);
    translate(this.body.position.x, this.body.position.y);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
    