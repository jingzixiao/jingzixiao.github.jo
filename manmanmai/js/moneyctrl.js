;(function(){
  var monMain=$("#mon_main");
  var currentPage = 0;  // 当前页数
  var pageNum;
  var totalCount;
  var options=[];
  var select=$(".items>select");
 
  
  function getData(){
    $.ajax({
      url:ipAddress+"/api/getmoneyctrl",
      type:"get",
      dataType:"JSON",
      data:{
        pageid:currentPage
      },
      success:function(data) {
        console.log(data);
        monMain.html(template("monTpl",data));
        totalCount=data.totalCount;
        pageNum=Math.ceil(totalCount/10);
        
        for (var i = 1; i <= pageNum; i++) {
          options.push($('<option value='+i+'>'+i+'/'+pageNum+'</option>').attr("data-page",i).appendTo(select));
          // console.log($("select>option").val());
        }
        for (var i = 1; i <= options.length; i++) {
          if(i==currentPage-1){
            options[i].prop("selected","selected").siblings().removeProp("selected");
            // options[i].selected=true;
            // options[i].disable=true;
          }
          
        }
  
        // select.on("change","option",function(){
        //   alert("12")
        //   var _this=$(this);
        //   // for (var i = 1; i <= options.length; i++) {
        //   //   window.location.href=url+"?pageid="+(_this.value-1);
        //   // }
        //   currentPage=_this.value-1;
        // })
        // var url=window.location.href.split("?pageid=")[0];
        // var pageid=window.location.href.split("?pageid=")[1];
        //
        //
        // var prevCurrentPage=Math.max(currentPage-1,0);
        // var nextCurrentPage=Math.max(currentPage+1,pageNum);
        //
        // if(currentPage==0){
        //   prev.attr("href","javascript:;")
        // }else{
        //   prev.attr("href",url+"?pageid="+prevCurrentPage)
        // }
        // next.attr("href",url+"?pageid="+nextCurrentPage)
  
      }
    })
  }
 getData();
  // console.log(options);
  
  var prev=$("#prev");
  var next=$("#next");
  
  prev.on("click",function(){
    currentPage--;
    if(currentPage < 1){
      currentPage = 1;
      alert('已经是第一页数据了');
      // 阻断代码的运行
      return false;
    }
    getData();
    options=[];
    
  });
  
  next.on("click",function(){
    currentPage++;
    if(currentPage >pageNum){
      currentPage = pageNum;
      alert('已经是第一页数据了');
      // 阻断代码的运行
      return false;
    }
    options=[];
    getData();
  });
  
  select.on("change",function(){
    var _this=$(this);
    currentPage=_this.val()-1;
    
    getData();
  })
  
})()