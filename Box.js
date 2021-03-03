class Box{
    constructor(x,y,width,height){
       var options={
           restitution:0.8
       }
        this.body=Bodies.rectangle(x,y,width,height, options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);


    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
        
    }
}
//push():new setting
//pop():reverts old settings
//translate:store x and y position and change O