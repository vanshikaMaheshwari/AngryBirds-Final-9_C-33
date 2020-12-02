class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.arr = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //pos=[x1,y1], [x2,y2], [x3,y3]
    //arr=[[x1,y1],[x2,y2],[x3,y3]]
    if(this.body.position.x > 200 && this.body.velocity.x > 10){
      var pos = [this.body.position.x,this.body.position.y];
      this.arr.push(pos);
    }
    
    for(var i = 0;i < this.arr.length; i++){
      image(this.smokeImg, this.arr[i][0],this.arr[i][1])
    }
    super.display();
  }
}
