$(function(){
  if ($("body.home").length > 0){
    var carStart, carEnd, planeStart, planeEnd;

    var carAnimationTime = 60000;
    var carLeftAnimationTime = 32000;
    var planeAnimationTime = 75000;
    var plane2AnimationTime = 40000;

    function setupGeometry(){
      carStart = (-1 * $("#car").width()) - 20;
      carEnd = ($(window).width() + $("#car").width()) + 20;
      carLeftStart = ($(window).width() + $("#car-left").width()) + 20;
      carLeftEnd = (-1 * $("#car-left").width()) - 20;
      planeStart = ($(window).width() + $("#plane").width());
      planeEnd = (-1 * $("#plane").width()) - 20;      
      plane2Start = ($(window).width() + $("#plane").width());
      plane2End = (-1 * $("#plane").width()) - 20;            
    }

    function startPlaneAnimation(){
      $("#plane").css({
        left: planeStart
      });

      $("#plane").animate({
        left: planeEnd
      }, planeAnimationTime, "linear");        
    }

    function startPlaneA2nimation(){
      $("#plane-2").css({
        left: plane2Start
      });

      $("#plane-2").animate({
        left: plane2End
      }, plane2AnimationTime, "linear");        
    }    

    function startCarAnimation(){
      $("#car").css({
        left: carStart
      });

      $("#car").animate({
        left: carEnd
      }, carAnimationTime, "linear");      
    }

    function startCarLeftAnimation(){
      $("#car-left").css({
        left: carLeftStart
      });      

      $("#car-left").animate({
        left: carLeftEnd
      }, carLeftAnimationTime, "linear");      
    }

    function restartAnimation(){
      startPlaneAnimation();
      startCarAnimation();
      setTimeout(startCarLeftAnimation, carAnimationTime - 18000)
      setTimeout(startPlaneA2nimation, 18000);
      setTimeout(restartAnimation, 73000);
    }    

    $(window).resize(setupGeometry);

    setTimeout(function(){
      $(".cityscape").fadeIn(4000);
      setupGeometry();
      restartAnimation();      
    }, 3000)
  }
});