// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello! This site is under construction. Thank you for your patience'
//   }
// })

$(document).ready(function () {
  console.log($("img").height() - 10);
  $(".overlay").offset({ top: ($("img").height()) * 2 });
  window.onresize = function (event) {
    console.log($("img").height() - 10);
    $(".overlay").offset({ top: ($("img").height()) * 2 });
  }
});