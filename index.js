//colour changing the nav items on mouseover
var navitem=$(".navitem");
navitem.eq(0).mouseover(function(){
  navitem.eq(0).css("color","#E63946");
})
navitem.eq(1).mouseover(function(){
  navitem.eq(1).css("color","#E63946");
})
navitem.eq(2).mouseover(function(){
  navitem.eq(2).css("color","#E63946");
})
navitem.eq(0).mouseout(function(){
  navitem.eq(0).css("color","#F1FAEE");
})
navitem.eq(1).mouseout(function(){
  navitem.eq(1).css("color","#F1FAEE");
})
navitem.eq(2).mouseout(function(){
  navitem.eq(2).css("color","#F1FAEE");
})
var body=$(".primaryjumbotron");
body.fadeIn("slow");
var whereibeen=$(".whereibeen");
whereibeen.click(function(){
  body.fadeOut("slowly");
  $(".hiddenjumbotron1").slideDown("slow");
})


var whatido=$(".whatido");
whatido.click(function(){
  body.fadeOut("slowly");
  $(".hiddenjumbotron2").slideDown("slow");
})
