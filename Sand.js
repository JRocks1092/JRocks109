class Sand {

  constructor(x, y) {

    var options = {

      'restitution': 1.3,
      'friction': 5,
      'density': 1.0

    }

    this.body = Bodies.circle(x, y, 5, options);

    World.add(world, this.body);

  }

  display() {

    var pos = this.body.position;

    rectMode(CENTER);

    fill("brown");
    ellipse(pos.x, pos.y, 10, 10);

  }
}