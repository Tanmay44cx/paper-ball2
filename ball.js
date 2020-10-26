class Ball {
    constructor(x,y,r) {
      this.image = loadImage("paper.png");
          var options = {
          'restitution':0.5,
          'friction':0,
          'density':0.6,
          isStatic:false
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
           
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("red");
      //imageMode();
      image(this.image,0,0,40,40);
      pop();
    }
  };
  


