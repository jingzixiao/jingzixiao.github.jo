(function(w){
  function Sky(option){
    this.ctx=option.ctx;
    this.img=option.img;
    this.height=this.ctx.canvas.height;
    this.width=this.img.width/this.img.height*this.height;
    this.index=option.index || 0;
    this.x=this.index*this.width;
    this.y=0;
    this.offsetX=this.x;
  }
  
  Sky.prototype.render=function(){
    this.offsetX-=2;
    if(this.offsetX<this.x-this.width){
      this.offsetX=this.x;
    }
    this.ctx.drawImage(this.img,0,0,this.img.width,this.img.height,this.offsetX,this.y,this.width,this.height);
  }
  
  w.Sky=Sky;
})(window)