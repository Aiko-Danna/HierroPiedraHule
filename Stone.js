class Stone {
    constructor(x, y){
        var options = {
            'restitution': 0.8,
            'friction': 0.9,
            'density': 12
        }
        this.width = 50;
        this.height = 80;
        this.body = Bodies.rectangle(x, y, 50, 80, options);
        World.add(world, this.body);
    }
    display(){
        var stonePoss = this.body.position;
        var angle = this.body.angle;

        push()
        translate(stonePoss.x, stonePoss.y);
        rectMode(CENTER);
        rotate(angle);
        strokeWeight(4);
        stroke("brown");
        fill("brown");
        rect(0, 0, this.width, this.height);

        pop()
    }
}