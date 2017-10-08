;(function(){
  var brandTitleBox=$("#brandTitle_box");
  // var titleId;
  function getData(){
    $.ajax({
      url:ipAddress+'/api/getbrandtitle',
      type:"get",
      dataType:"JSON",
      success:function(data){
        console.log(data);
        brandTitleBox.html(template("brandTitleTpl",data));
      }
    })
  }
  
  getData();

   
  
  
 
  
  
  
  
  
  
  
})();