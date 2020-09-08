class Dustbin {
    constructor(x,y,width,height,options) {
        var options = {
            isStatic: true
        }
    }
    display(){
      rectMode(CENTER);
      fill("white");
      rect(500, 625, 20, 100);
      rect(600, 680, 200, 20);
      rect(700, 625, 20, 100);
    }
}