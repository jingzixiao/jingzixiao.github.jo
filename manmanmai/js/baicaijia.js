;(function(){
 var ulWrap=$("#ulWrap");
 var titleid;
  var myScroll;
  $.ajax({
    url:ipAddress+"/api/getbaicaijiatitle",
    type:"get",
    dataType:"JSON",
    success:function(data) {
      console.log(data);
      ulWrap.html(template("wrapTpl",data));
      var num=data.result.length;
      var liWidth=ulWrap.find("li").width();
      console.log(liWidth);
      ulWrap.width(num*liWidth);
      console.log(num * liWidth);
      myScroll=new IScroll(".wrap",{scrollX:true})
      
    }
  })
  
  
  var baicaijiaList=$('#baicaijia_list');
  
  function getData(){
    titleid=titleid||0;
    $.ajax({
      url:ipAddress+"/api/getbaicaijiaproduct",
      type:"get",
      dataType:"JSON",
      data:{titleid :titleid},
      success:function(data) {
        console.log(data);
        baicaijiaList.html(template("listTpl",data));
      
      }
    })
  }
  
  getData();
  
 
  
  ulWrap.on("click","li",function(){
    titleid=$(this).data("titleid");
    // console.log(titleid);
    getData();
    $(this).children().addClass("current");
    $(this).siblings().children().removeClass("current");
    myScroll.scrollToElement(this, 200, true, true);
  })
  
  
   
  
  
  
})()