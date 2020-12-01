class stone{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1.0,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }

    display(){
imageMode(CENTER)
image(this.image,this.body.position.x, this.body.position.y)
    }
}