(function(w){
  function Bird(option){
    this.img=option.img;
    this.ctx=option.ctx;
    this.width=this.img.width/3;
    this.height=this.img.height;
    this.x=option.x ||100;
    this.y=option.y ||100;
    
    this.a=0.0005;
    this.speed=0;
    this.maxSpeed=0.5;
    this.angle=0;
    this.maxAngle=45;
    this.index=option.index || 0;
    
  }
  Bird.prototype.render=function(Dvalue){
    this.angle=this.speed*this.maxAngle/this.maxSpeed;
    this.angle>45 ? 45 : this.angle;
    
    this.y=this.y+this.speed*Dvalue+1/2*this.a*Dvalue*Dvalue;
    this.speed=this.speed+this.a*Dvalue;
    
    this.ctx.save();
    this.ctx.translate(this.x,this.y);
    this.ctx.rotate(this.angle*Math.PI/180);
    this.ctx.drawImage(this.img,this.index*this.width,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);
    this.ctx.restore();
    this.index++;
    this.index=this.index%3;
  }
  w.Bird=Bird;
})(Game);