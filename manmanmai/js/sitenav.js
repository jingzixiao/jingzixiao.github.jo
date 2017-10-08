;(function(){

    var siteNav=$("#site_nav");

    $.ajax({
      url:ipAddress+"/api/getsitenav",
      type:"get",
      dataType:"JSON",
      success:function(data) {
        console.log(data);
       siteNav.html(template("navTpl",data));
    
      }
    })
  
})()