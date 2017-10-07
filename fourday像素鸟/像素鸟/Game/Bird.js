(function(w){
  function Bird(option){
    this.ctx=option.ctx;
    this.img=option.img;
    this.x=option.x || 100;
    this.y=option.y || 100;
    this.width=this.img.width/3;
    this.height=this.img.height;
    this.index=0;
  
    //加速运动属性
    this.speed=0;
    this.a=0.0005;
    this.maxSpeed=0.5;
    this.angle=0;
    this.maxAngle=45;
    
  }
  
  Bird.prototype.render=function(Dvalue){
    /*
     V=Vo+a*t
     S=S+V*t+1/2*a*t*t
     */
    this.y=this.y+this.speed*Dvalue+ 1/2*this.a*Dvalue*Dvalue;
    this.speed=this.speed+this.a*Dvalue;
    //速度也在增加,但是距离要先算再算速度,速度是用于下次计算距离使用的
    this.angle=this.speed*this.maxAngle/this.maxSpeed;
    if(this.angle>this.maxAngle){
      this.angle=this.maxAngle;
    }
    
    this.ctx.save();
    this.ctx.translate(this.x,this.y);
    this.ctx.rotate(this.angle*Math.PI/180);
    this.ctx.drawImage(this.img,this.index*this.width,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);
    
    this.ctx.restore();
    this.index++;
    this.index=this.index%3;
  }
  
  w.Bird=Bird;
})(Game)