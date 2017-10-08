;(function(){
  var gsproductMain=$("#gsproduct_main");
  var area=$("#area");
  var areaBtn=$(".area_btn");
  var shop=$("#shop");
  var shopBtn=$(".shop_btn");
  var areaid;
  var shopid;
 
  function getData(){
    areaid=areaid || 0;
    shopid=shopid || 0;
    $.ajax({
      url:ipAddress+"/api/getgsproduct",
      type:"get",
      dataType:"JSON",
      data:{
        shopid:shopid,
        areaid:areaid
      },
      success:function(data) {
        console.log(data);
        gsproductMain.html(template("gsproductTpl",data));
        
      }
    })
  }
 getData();
 
  shopBtn.on("click",function(){
    $.ajax({
      url:ipAddress+"/api/getgsshop",
      type:"get",
      dataType:"JSON",
      success:function(data) {
        console.log(data);
        shop.html(template("shopTpl",data));
        shop.children().eq(0).addClass("on");
        shop.stop().slideToggle(200);
        shop.siblings(".popbox").hide();
      }
    })
    
})

  var popbox=$(".popbox");
  
  shop.on("click","li",function(){
    var _this=$(this);
    _this.addClass("on").siblings().removeClass("on");
   
    shopid=_this.data("shopid");
    // console.log(shopid);
    //areaid=_this.data("areaid");
    // console.log(areaid);
    // if(!shopid){
    //   shopid=0;
    // }
    getData();
    _this.parent().slideUp(700);
  })
  
  area.on("click","li",function(){
    var _this=$(this);
    _this.addClass("on").siblings().removeClass("on");
   
    // shopid=_this.data("shopid");
    // console.log(shopid);
    areaid=_this.data("areaid");
    // console.log(areaid);
    // if(!shopid){
    //   shopid=0;
    // }
    getData();
    _this.parent().slideUp(700);
  })
  
  
  
  
  
  
 
  areaBtn.on("click",function(){
    $.ajax({
      url:ipAddress+"/api/getgsshoparea",
      type:"get",
      dataType:"JSON",
      success:function(data) {
        console.log(data);
        area.html(template("areaTpl",data));
        area.children().eq(0).addClass("on");
        area.stop().slideToggle(200);
        area.siblings(".popbox").hide();
      }
    })
  
   
  })
 
  var all=$(".all");
  var allBox=$("#allBox");
  all.on("click",function(){
    allBox.stop().slideToggle(200);
    allBox.siblings(".popbox").hide();
  })
  
  
})()