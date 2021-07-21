class Launcher{
    constructor(bodyA, pointB){
var options= {
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:100,
}
this.launcher= Constraint.create(options)
World.add (world,this.launcher)
this.pointB=pointB
    }

 fly(){ 
this.launcher.bodyA= null
 }

attach(body){
this.launcher.bodyA= body   
}

 display(){
     //line(x1,y1,x2,y2)
     if (this.launcher.bodyA) {
     var pointA= this.launcher.bodyA.position
     var pointB= this.pointB

     line (pointA.x,pointA.y,pointB.x,pointB.y) 
     }
     
 }
}