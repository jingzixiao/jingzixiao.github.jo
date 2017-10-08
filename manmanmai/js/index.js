;(function(){
  var indexNav=$("#indexNav");
  $.ajax({
    url:ipAddress+"/api/getindexmenu",
    type:"get",
    dataType:"JSON",
    success:function(data){
      console.log(data);
      indexNav.html(template("tpl",data));
      var id=indexNav.children().data("id");
      var lis=indexNav.children();
      lis.each(function(index,el){
        var _this=$(this);
        var _el=$(el);
        var id=_el.data("id");
        // console.log(id);
        if(id>7){
          _this.css({"display":"none"});
        }
      })
    }
  })
  
  indexNav.on("click","li:nth-child(8)",function(){
    var _this=$(this);
    _this.nextAll("li").toggle("hide");
  });
 
  
  
  
  
})()

;(function(){
  $.ajax({
    url:ipAddress+"/api/getmoneyctrl",
    type:"get",
    dataType:"JSON",
    success:function(data){
      console.log(data);
      $("#midd").html(template("middTpl",data));
    }
  })
})()

;(function(){
  
  
  
  
  
  
  
  
  
  
  
})()
