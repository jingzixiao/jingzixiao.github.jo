;(function(){
  var brandBox=$("#brand_box");
  var href=window.location.href;
  var brandtitleId=href.split("=")[1];
  console.log(brandtitleId);
  function getData(){
    $.ajax({
      url:ipAddress+'/api/getbrand',
      type:"get",
      dataType:"JSON",
      data:{brandtitleid:brandtitleId},
      success:function(data){
        console.log(data);
        brandBox.html(template("brandTpl",data));
      }
    })
  }
  
  getData();
  
  
  var href=window.location.href
  var brandtitleId=href.split("=").slice(-1)[0];
  var pagesize=5;
  console.log(brandtitleId);
  var productcoms=[];
  $.ajax({
    url:ipAddress+'/api/getbrandproductlist',
    type:"get",
    dataType:"JSON",
    data:{
      brandtitleid:brandtitleId,
      pagesize:pagesize
    },
    success:function(data) {
      console.log(data);
      $("#productlist").html(template("productlistTpl", data));
      for (var i = 0; i < data.result.length; i++) {
        var item=data.result[i]
        productcoms.push({productImg:item.productImg,productName:item.productName});
      }
    }
  })
  
  console.log(productcoms);
  
  
  var productId=1;
  
  $.ajax({
    url:ipAddress+'/api/getproductcom',
    type:"get",
    dataType:"JSON",
    data:{
      productid :productId ,
    },
    success:function(data) {
      console.log(data);
      for (var i = 0; i < data.result.length; i++) {
        var item=data.result[i];
        for(var k in productcoms[i]){
          item[k]=productcoms[i][k];
        }
      }
      console.log(data.result);
  
       $("#ulCommet").html(template("commetTpl", data));
      
    }
  })
  
  
  
  
  
})();