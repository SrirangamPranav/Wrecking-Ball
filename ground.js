class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            density:1,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        strokeWeight(2)
        rectMode(CENTER)
        rect(this.x,this.y,this.width,this.height)
        pop()
    }
}