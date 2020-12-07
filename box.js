class box{
    constructor(x,y,width,height){
    var options ={
        density : 1,
        friction : 1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
}