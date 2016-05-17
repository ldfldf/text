define(function(require,exports,module){
   function url(){
     var $ = require.async('$');
     var arr = location.search.substring(1).split("&");
     var obj = {};
     var new_arr= [];
     var arr2 = [];
     for(var i in arr){
      new_arr = arr[i].split("=");
       obj[new_arr[0]] = new_arr[1];
     }
     console.log(obj);
     console.log($);
  }
   module.exports = url;
})
