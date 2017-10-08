;(function(){
  var mcategoryBox=$("#mcategory_box");
  // var titleId;
  function getData(){
    $.ajax({
      url:ipAddress+'/api/getcategorytitle',
      type:"get",
      dataType:"JSON",
      success:function(data){
        console.log(data);
        mcategoryBox.html(template("mcategoryTpl",data));
      }
    })
  }
  
  getData();
  
  mcategoryBox.on('click',".title",function(){
      var _this=$(this);
      var titleId=_this.parent().data("id");
      var inFo=_this.parent().children("ul");
      $.ajax({
        url:ipAddress+'/api/getcategory',
        type:"get",
        dataType:"JSON",
        data:{titleid:titleId},
        success:function(data){
          console.log(data);
          inFo.html(template("infoBoxTpl",data));
        }
      })
      _this.parent().siblings().children(".info").hide();
      inFo.toggle();
    
    
    })
  
  
 
  
  
  
  
  
  
  
})();