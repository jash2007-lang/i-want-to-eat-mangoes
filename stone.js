class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution: 1,
          friction: 0,
          density: 0.8
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
      this.image = loadImage("Plucking mangoes/stone.png")
    }
    display(){
      var pos =this.body.position;
      fill("purple")
      imageMode(RADIUS);
      
      image(this.image,pos.x, pos.y, this.r, this.r);
    }
  };