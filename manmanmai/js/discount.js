;(function(){
  var box=$("#box");
  var href=window.location.href
  var productId=href.slice(-1);
  // productId=productId || 0;
  console.log(href);
  console.log(productId);
  function getData(){
    $.ajax({
      url:ipAddress+"/api/getdiscountproduct",
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