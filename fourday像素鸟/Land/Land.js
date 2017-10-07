(function(w){
  function Land(option){
    this.ctx=option.ctx;
    this.img=option.img;
    this.width=this.img.width;
    this.height=this.img.height;
    this.index=option.index ||0;
    this.x=this.index*this.width;
    this.y=this.ctx.canvas.height-this.height;
    // console.log(this.y);
    this.offset=this.x;
  }
  
  Land.prototype.render=function(){
    this.offset-=13;
    if(this.offset<this.x-this.width){
      this.offset=this.x
    }
    this.ctx.drawImage(this.img,0,0,this.width,this.height,this.offset,this.y,this.width,this.height);
  }
  
  w.Land=Land;
})(window)