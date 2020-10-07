class paper {
 constructor(x,y,radius){
     var options = {
         'density':1.3,
         'friction': 0.5,
         'restitution':0.3,
         'isStatic': false

     };
     
     this.radius = radius;
     this.x = x;
     this.y = y;
     this.body= Bodies.circle(this.x,this.y,this.radius/2, options);
     World.add (world,this.body);


 };
 display(){
    var paperpos=this.body.position;
     push() 
     translate(paperpos.x, paperpos.y);
      rectMode(CENTER)
       strokeWeight(3); 
       fill(255,0,255)
        ellipse(0,0,this.radius, this.radius);
         pop()
 }



}