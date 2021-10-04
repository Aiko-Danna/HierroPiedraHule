class Iron{
    constructor(x,y){
        var options = {
            'restitution': 0.8,
            'frictiom': 3,
            'density': 30
        }
        this.width = 100;
        this.height = 100;
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        World.add(world, this.body);
    }
    display(){
        var ironPoss = this.body.position;
        var angle = this.body.angle;

        push();
        translate(ironPoss.x, ironPoss.y);
        rectMode(CENTER);
        rotate(angle);
        strokeWeight(4);
        stroke("black");
        fill("black");
        rect(0, 0, this.width, this.height);

        pop();
    }
}