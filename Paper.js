  class Paper {
    constructor(x,y ){
        var ball_options ={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
             
        }
       this.body=Bodies.circle(x,y,50,ball_options);
       this.image = loadImage("crumpled_paper.png");
       World.add(world,this.body);
    

    }
    display(){
        var pos= this.body.position ;
       
        push()
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        image(this.image,0,0,50,50);
        pop()
    }


}