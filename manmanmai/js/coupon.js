;(function(){
  var storeBox=$(".storeBox");
  
    $.ajax({
      url:ipAddress+"/api/getcoupon",
      type:"get",
      dataType:"JSON",
      success:function(data) {
        console.log(data);
        storeBox.html(template("storeBoxTpl",data));
        
      }
    })


  
})()