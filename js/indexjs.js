let listWidth=$("#openList").outerWidth();
$("#open").click(function()
{
    
    if($("#openList").css("left")=="0px" && $("#open").css("left")==`${listWidth}px` && $(".headerText").css("left")==`${listWidth}px`)
    {
        $("#openList").animate({left:`-${listWidth}`},1000);
        $("#open").animate({left:'0px'},1000);
        $(".headerText").animate({left:'0px'},1000);
       
    }
    else
    {
        $("#openList").animate({left:`0px`},1000);
        $("#open").animate({left:`${listWidth}`},1000);
        $(".headerText").animate({left:`${listWidth}`},1000);
        
    }
   
})
$("#close").click(function()
{
    $("#openList").animate({left:`-${listWidth}`},1000);
    $("#open").animate({left:'0px'},1000);
    $(".headerText").animate({left:'0px'},1000);

})

$("#openList a").click(function()
{
    let sectionHref=$(this).attr("href");
    let sectionOffset=$(sectionHref).offset().top;

    $("html,body").animate({scrollTop:sectionOffset} ,2000);
})


$("#details .textUp").slideUp(50);
$("#details h2").click(function()
{
    $(this).next().slideToggle();
    $("#details p").not($(this).next()).slideUp(500);
})



let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

let startCount = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = `${days} D` ;
  document.getElementById("hours").innerHTML = `${hours} H` ;
  document.getElementById("min").innerHTML = `${min} M` ;
  document.getElementById("sec").innerHTML = `${sec} S` ;

  if (distance < 0) {
    clearInterval(startCount);
    document.getElementById("days").innerHTML = "0 D" ;
    document.getElementById("hours").innerHTML = "0 H" ;
    document.getElementById("min").innerHTML = "0 M" ;
    document.getElementById("sec").innerHTML = "0 S" ;
  }
}, 1000);

let maxCha=100;
$("#endOfChar").keydown(function()
{
       maxCha--;
       $("#stopCh").text(maxCha);
   
    if(maxCha<0)
    {
        $("#stopCh").text("your available character finished");
    }
    // x=$(this).value;
    // maxCha--;
    // $("#stopCh").text(maxCha);
  
})


