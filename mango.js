class mangos{
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1.0,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
    }

    display(){
imageMode(CENTER)
image(this.image,this.body.position.x, this.body.position.y)
    }
}