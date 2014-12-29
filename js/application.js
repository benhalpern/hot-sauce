$(document).ready(function(){

  var bg = new Image();
  $(bg).one("load", function() {
    $("#background").animate({"opacity":"0.8"},2000)
  }).attr("src", "./sriracha.gif");

    $("#logo").animate({"opacity":"0.8"},3000)
    $("body").animate({"border-width":"100px"},1800)
    $("#container").animate({"margin-left":"+=300px"},1800)

})
