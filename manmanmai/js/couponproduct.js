;(function(){
  var productMain=$("#product_main");
  var title=$(".center h2");
  var href=window.location.href;
  var arr=href.split("?")[1].split("&");
  var couponid=arr[0].split("=")[1];
  var couponTitle=arr[1].split("=")[1];
  console.log(couponid);
  console.log(decodeURI(couponTitle));
  
  couponid=couponid || 0;
  function getData(){
    $.ajax({
      url:ipAddress+"/api/getcouponproduct",
      type:"get",
      dataType:"JSON",
      data:{
        couponid:couponid
      },
      success:function(data) {
        console.log(data);
        productMain.html(template("productTpl",data));
        title.html(decodeURI(couponTitle)+"优惠券");
      }
    })
  }
 getData();

  
})()