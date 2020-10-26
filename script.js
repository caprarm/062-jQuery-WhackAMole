$(".mole1").hover(function(){
    $(".mole1").hide();
});
    
$(".mole-two").click(function(){
    $(".mole-two").hide();
});
    
$(".third-mole").click(function(){
    $("img").show();
    $(".third-mole").hide();
});
    
$(".reset").click(function(){
    $("img").show();
    $(".yard, .square").show();
});

$(".square img").click(function(){
    $(".yard, .square").hide();
});