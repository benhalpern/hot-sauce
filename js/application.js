$(document).ready(function(){

  var bg = new Image();
  $(bg).one("load", function() {
    $("#background").animate({"opacity":"0.8"},2000)
  }).attr("src", "./sriracha.gif");

    $("body").animate({"border-width":"100px"},700)
    setTimeout(function(){
      $("#container").animate({"opacity":"1"},1900)
    },300)

})
