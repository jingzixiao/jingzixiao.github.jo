;(function(){
  var inLandMain=$("#inland_main");
  // var page=1;
  // var flag=true;
  function getData(){
    $.ajax({
      url:ipAddress+"/api/getinlanddiscount",
      type:"get",
      dataType:"JSON",
      // data:{
      //   page:page,
      //   pageSize:10
      // },
      success:function(data) {
        console.log(data);
        inLandMain.html(template("inlandTpl",data));
        
      }
    })
  }
 getData();
  
  
  
  
  
  
  
  
})()