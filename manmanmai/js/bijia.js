(function(){
  var productDetail=$(".productDetail");
  var href=window.location.href
  var hr=href.split("?")[1].split("&");
  console.log(hr);
  var productId=hr[0].split("=").slice(-1)[0];
  console.log(productId);
  var categoryId=hr[1].split("=").slice(-1)[0];
  console.log(categoryId);
  var a2=$(".middle li:nth-child(2)>a");
  var a3=$(".middle li:nth-child(3)>a");
  var bjnote=$(".bjnote");
  
  $.ajax({
    url:ipAddress+"/api/getcategorybyid",
    type:"get",
    dataType:"JSON",
    data:{categoryid :categoryId },
    success:function(data) {
      console.log(data);
      var str2=data.result[0].category;
      // console.log(str2);
      a2.html(str2);
      a2.attr("href","productlist.html?categoryid="+categoryId);
      productDetail.html(template("productDetailTpl",data))
    }
  })
  
  $.ajax({
    url:ipAddress+"/api/getproduct",
    type:"get",
    dataType:"JSON",
    data:{productid :productId },
    success:function(data) {
      console.log(data);
      var str3=data.result[0].productName.split(" ")[0];
      // console.log(str3);
      a3.html(str3);
      productDetail.html(template("productDetailTpl",data))
      bjnote.html(data.result[0].bjShop);
      
    }
  })
  
  var evaluate=$("#evaluate");
  $.ajax({
    url:ipAddress+"/api/getproductcom",
    type:"get",
    dataType:"JSON",
    data:{productid :productId },
    success:function(data) {
      console.log(data);
      evaluate.html(template("evaluateTpl",data))
    }
  })
  
  
  
})()