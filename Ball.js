class Ball{
    constructor(x,y,r){
        var options = {
            density:1,
            frictionAir:0.005
        }
        this.r = r
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }
    display(){
        var ballpos = this.body.position
        push()
        translate(ballpos.x,ballpos.y)
        rotate(this.body.angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.r*2,this.r*2)
        pop()
    }
}