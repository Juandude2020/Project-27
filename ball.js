class Ball{
    constructor(x, y, width, height,angle) {
        var options = {
            'density':1,
            frictionAir:0.00000000000000000000000000001

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("black")
        strokeWeight(3);
        fill("red");
        ellipse(0, 0, this.width, this.height);
        pop();
      }
    };
    