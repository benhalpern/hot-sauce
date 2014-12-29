$(document).ready(function(){

  var bg = new Image();
  $(bg).one("load", function() {
    $("#background").animate({"opacity":"0.8"},2000)
  }).attr("src", "./sriracha.gif");

    $("body").animate({"border-width":"100px"},700)
    setTimeout(function(){
      $("#container").animate({"opacity":"1"},1900)
    },300)

    $("#asgift").click(function(){
      $("body").animate({"border-width":"0px","height":"+=200px"},200)
      $("#container").hide();
      $("#gift").fadeIn('slow');
    })
    $("#foryou").click(function(){
      $("body").animate({"border-width":"0px","height":"+=200px"},200)
      $("#container").hide();
      $("#yourself").fadeIn('slow');
    })


})
