$(document).ready(function () {
    $(".arrow").on("click", function () {
      var currentImg = $(".slidein img.active");
      var nextImg = currentImg.next();
      if (nextImg.length === 0) {
        nextImg = $(".slidein img:first");
      }
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    });
    $(".prev").on("click", function () {
      var currentImg = $(".slidein img.active");
      var prevImg = currentImg.prev();
      if (prevImg.length === 0) {
        prevImg = $(".slidein img:last");
      }
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    });
    $(".next").on("click", function () {
      var currentSVG = $(".sirc .activeSVG");
      var nextSVG = currentSVG.next();
      if (nextSVG.length === 0) {
        nextSVG = $(".sirc img:first");
      }
      currentSVG.removeClass("activeSVG");
      nextSVG.addClass("activeSVG");
    });
  });