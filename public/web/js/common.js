

var tools = {
    getSearchObj:function () {
        //获取地址栏参数,封装成一个对象 
        var search = location.search;
        //对search字符串进行解码
        search = decodeURI(search);
        //去除
        search = search.slice(1);
        //把search切割成一个数组   
        var arr = search.split("&");
        var obj = {};
        //遍历数组
        arr.forEach(function ( v ) {
          var key = v.split("=")[0];
          var value = v.split("=")[1];
          obj[key] = value;
        });
        return obj;
      },
      getSearch: function(key){
        return this.getSearchObj()[key];
      }
}

$(function(){
    
    // $(".user").on("tap",function(){
    //     var token = localStorage.getItem("token")
    //     // if(token){
    //     //   alert(123)
    //     //   location.href = "userInfo.html"
    //     // }else{
    //     //   location.href = "user.html"
    //     // }

    //     location.href = "userInfo.html"
    // })
   
  





})