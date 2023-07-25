if(typeof jQuery !== 'undefined')
{
$(".box1").on("click", function(event){
    $(".box1").css("opacity", "0.5");
    setTimeout(function(){
        $(".box1").css("opacity", 1);
    }, 100);
    // alert("Green was clicked");
    const audio = new Audio("./sounds/sound1.wav");
    audio.play();
});
$(".box2").on("click", function(){
    $(".box2").css("opacity", "0.5");
    setTimeout(function(){
        $(".box2").css("opacity", 1);
    }, 100);
    const audio = new Audio("./sounds/sound2.wav");
    audio.play();
    // alert("Red was clicked");
});
$(".box3").on("click", function(){
    $(".box3").css("opacity", "0.5");
    setTimeout(function(){
        $(".box3").css("opacity", 1);
    }, 100);
    const audio = new Audio("./sounds/sound3.mp3");
    audio.play();
    // alert("Yellow was clicked");
});
$(".box4").on("click", function(){
    $(".box4").css("opacity", "0.5");
    setTimeout(function(){
        $(".box4").css("opacity", 1);
    }, 100);
    // alert("Blue was clicked");
    const audio = new Audio("./sounds/sound4.wav");
    audio.play();
});
}
else alert("jQuery not detected");
