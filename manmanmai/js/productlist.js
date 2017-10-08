;(function(){
  var currentPage = 1;  // 当前页数
  var pageNum;
  var totalCount;
  var options=[];
  var select=$(".items>select");
  var href=window.location.href
  var categoryid=href.split("=").slice(-1)[0];
  var a=$(".middle li:nth-child(3)>a");
  console.log(categoryid);
  
  $.ajax({
    url:ipAddress+'/api/getcategorybyid',
    type:"get",
    dataType:"JSON",
    data:{
      categoryid:categoryid,
    },
    success:function(data) {
      console.log(data);
      var str=data.result[0].category.split(" ")[0];
      console.log(str);
      a.html(str);
    }
  })
  
  
  
  function getData(){
    $.ajax({
      url:ipAddress+'/api/getproductlist',
      type:"get",
      dataType:"JSON",
      data:{
        categoryid:categoryid,
        pageid:currentPage
      },
      success:function(data){
        console.log(data);
        $("#productlist").html(template("productlistTpl",data));
  
        totalCount=data.totalCount;
        pageNum=Math.ceil(totalCount/10);
  
        for (var i = 1; i < pageNum; i++) {
          options.push($('<option value='+i+'/'+pageNum+'>'+i+'/'+pageNum+'</option>').attr("data-page",i).appendTo(select));
    
        }
        
        //点击事件没写
      }
    })
  }
  
  getData();
})()
