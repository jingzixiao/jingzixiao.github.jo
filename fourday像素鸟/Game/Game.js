(function (w){
  function Game(option){
    this.ctx=option.ctx;
    this.roles=[];
    this.imgArr=['birds','land','pipe1','pipe2','sky'];
    this.timer=null;
    this.hero=null;
    
    this.startTime=+new Date();
    this.endTime=0;
    
    this.start();
  }
  
  Game.prototype={
    constructor:Game,
    start:function(){
      var that=this;
      this.loadImage(function(imgList){
        //初始游戏对象（创建对象是需要图片资源）
        that.initGame(imgList);
        that.timer=setInterval(function(){
          that.endTime=+new Date();
          var Dvalue=that.endTime-that.startTime;
          that.startTime=that.endTime;
          ctx.beginPath();
          that.render(Dvalue);
          that.impact();
        },50)
        that.userControl();
      })
    },
    loadImage:function(callback){
      var imgList={};
      for (var i = 0; i < this.imgArr.length; i++) {
        var obj=this.imgArr[i];
        var count=0;
        
        var img=new Image();
        img.src='../imgs/'+obj +'.png';
        imgList[obj]=img;
        
        var that=this;
        img.onload=function(){
          count++;
          if(count>=that.imgArr.length){
            callback && callback(imgList);
            console.log(imgList);
          }
        }
      }
    },
    //初始化游戏对象
    initGame:function(imgList){
      //天空
      for (var i = 0; i < 3; i++) {
        var sky = new Game.Sky({
          ctx: this.ctx,
          img: imgList['sky'],
          index: i
        });
        this.roles.push(sky);
      }
        // console.log(this.roles);
        //柱子
        for (var i = 0; i < 5; i++) {
          var p=new Game.Pipe({
            ctx:this.ctx,
            upImg:imgList['pipe2'],
            downImg:imgList['pipe1'],
            index:i
          });
          this.roles.push(p);
        }
        
        //大地
        for (var i = 0; i < 4; i++) {
          var land=new Game.Land({
            ctx:this.ctx,
            img:imgList['land'],
            index:i
          });
          this.roles.push(land);
        }
        //鸟
        
        var bird=new Game.Bird({
          ctx:this.ctx,
          img:imgList['birds']
        });
        this.roles.push(bird);
        this.hero=bird;
        console.log(this.roles);
    },
    render:function(Dvalue){
      for (var i = 0; i < this.roles.length; i++) {
        var obj=this.roles[i];
        obj.render(Dvalue);
      }
    },
    impact:function(){
      if(this.ctx.isPointInPath(this.hero.x,this.hero.y)||this.hero.y<0||this.hero.y>this.ctx.canvas.height-112){
        clearInterval(this.timer);
      }
    },
    userControl:function(){
      var that=this;
      window.onclick=function(){
        that.hero.speed=-0.3;
      }
    }
  }
  w.Game=Game;
})(window)