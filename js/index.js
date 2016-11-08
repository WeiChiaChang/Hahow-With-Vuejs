var apiUrl = {
  notifyData: "http://www.monoame.com/awi_class/api/command.php?type=get&name=notifydata",
  itemData: "http://www.monoame.com/awi_class/api/command.php?type=get&name=itemdata",
  hahowData: "http://www.monoame.com/awi_class/api/command.php?type=get&name=hahowdata"
};

// notifyData，記得寫new，不new會很冏
var vm1 = new Vue({
  el: "#app1",
  data: {
    // 動態載入會有點小延遲，善用此特性
    notifyData: "載入中．．．．"
  },
  ready: function(){
    $.ajax({
      url: apiUrl.notifyData,
      success: function(res){
        vm1.notifyData = res;
      }
    });
  }
});

//itemData
var vm2 = new Vue({
  el: "#app2",
  data: {
    items: []
  },
  ready: function(){
    $.ajax({
      url: apiUrl.itemData,
      success: function(res){
        // 轉成可用的JSON物件
        vm2.items = JSON.parse(res)
      }
    })
  }
});

//hahowData，btw，抓的是募資中的課程資料(INCUBATING)
var vm3 = new Vue({
  el: "#app3",
  data: {
    classes: []
  },
  ready: function(){
    // ajax做兩件事：去哪裡找資料，找完資料做什麼
    $.ajax({
      url: apiUrl.hahowData,
      success: function(res){
        //和vm2相似，將JSON表示的字串轉換成可用的物件
        vm3.classes = JSON.parse(res)
      }
    })
  }
});