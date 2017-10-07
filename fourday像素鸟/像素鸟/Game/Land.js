(function(w){
  function Land(option){
    this.ctx=option.ctx;
    this.img=option.img;
    this.width=this.img.width;
    this.height=this.img.height;
    this.index=option.index || 0;
    this.x=this.index*this.width;
    this.y=this.ctx.canvas.height-this.height;
    this.offsetX=this.x;
  }
  
  Land.prototype.render=function(){
    this.offsetX-=13;
    if(this.offsetX<this.x-this.width){
      this.offsetX=this.x;
    }
    this.ctx.drawImage(this.img,0,0,this.width,this.height,this.offsetX,this.y,this.width,this.height);
  }
  
  w.Land=Land;
})(Game)