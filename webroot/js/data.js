var regionData = null;

function ajax_test(callback){  
   jQuery.ajax({
    url: "/regions/list",
    type: "GET",
    async: false,
    contentType: 'application/json; charset=utf-8',
    success: function(resultData){  
        callback(JSON.parse(resultData));
    }
   });  
} 

ajax_test(function(data) {
  regionData = data;
});