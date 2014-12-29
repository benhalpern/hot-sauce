$(document).ready(function(){

  var bg = new Image();
  $(bg).one("load", function() {
    $("#background").animate({"opacity":"0.8"},2000)
    $(".bar").animate({"height":"100px"},666)
  }).attr("src", "./sriracha.gif");

    setTimeout(function(){
      $("#container").animate({"opacity":"1"},1500)
    },500)

    $("#asgift").click(function(){
      $("#container").hide();
      $("#gift").show();
      $("#gift").animate({"margin-top":"15px","opacity":"1"},300);
      $(".bar").animate({"height":"0px"},300)

    })
    $("#foryou").click(function(){
      $("#container").hide();
      $("#yourself").show();
      $("#yourself").animate({"margin-top":"15px","opacity":"1"},300);
      $(".bar").animate({"height":"0px"},300)

    })

    $(".back").click(function(){
      setTimeout(function(){
        $(".sales").hide();
        $("#container").fadeIn('slow');
      },299)
      $(".sales").animate({"margin-top":"500px","opacity":"0"},300);
      $(".bar").animate({"height":"100px"},300)

    })

})
