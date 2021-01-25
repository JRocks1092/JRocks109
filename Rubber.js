class Rubber {
    
    constructor(x, y) {
      
      var options = {
    
          'restitution':0.3,
          'friction':5,
          'density':1.0

      }
      
      this.body = Bodies.circle(x, y, 25, options);
      
      World.add(world, this.body);

    }

    display(){
      
      var pos =this.body.position;
                        
      rectMode(CENTER);
      
      fill("blue");
      ellipse(pos.x, pos.y, 50, 50);

    }
  }