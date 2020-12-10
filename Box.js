class Box {
    constructor(x, y, width,height) {
      var options = {
          isStatic: true          
         
   
           
      }
      this.body = Bodies.rectangle(x, y,20,20, options);
       
      this.width =width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(255);
       
      push()
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0,0,150,150);
      pop()
    }
  } 
   