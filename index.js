$(document).ready(function () {
  $(".overlay").offset({ top: ($("img").height()) * 2});


  window.onresize = function (event) {
    $(".overlay").offset({ top: ($("img").height()) * 2 });
  }
});