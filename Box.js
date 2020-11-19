class Box{
    constructor(x,y,width,height){
        var options = {
            density:1,
            frictionAir:0.005
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        strokeWeight(2)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}