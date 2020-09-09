class Bob {
    constructor(x, y, radius) {
      var options = {
        
          'restitution':0.8,
          'friction':5.0,
          'density':1.0,
          isStatic:true
  
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      
      
      World.add(world, this.body);
    }
    display(){
        fill("green");
      var pos =this.body.position;
      ellipse(pos.x,pos.y,this.radius)
      
     
      
      
      
      
    }
  };