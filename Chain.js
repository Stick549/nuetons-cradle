class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.24,
            length: 400
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        strokeWeight(4);
    }


    display(){ 
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke("white");
        strokeWeight(5)   
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}