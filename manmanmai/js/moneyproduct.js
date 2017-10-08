;(function(){
  var box=$("#box");
  var href=window.location.href
  console.log(href);
  var productId=href.split("productid=")[1];
  productId=productId||0;
  console.log(productId);
  function getData(){
    $.ajax({
      url:ipAddress+"/api/getmoneyctrlproduct",
      type:"get",
      dataType:"JSON",
      data:{productid :productId},
      success:function(data) {
        console.log(data);
        box.html(template("titleTpl",data))
        
      }
    })
  }
 getData();
  
  
  
  
  
  
  
  
})()