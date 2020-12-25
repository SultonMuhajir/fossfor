// => Window on Load
$(window).on("load", function () {
   $(".Header h1, .Header p").css({
      "transform": "translateY(0)",
      "opacity": "1"
   })
});


// => Window on Scroll
$(window).on("scroll", function () {
   if ($(this).scrollTop() >= 2) {
      $("nav").css("backgroundColor", "#eee");
      $(".brand a, ul a").css("color", "black");
      $("nav").css("boxShadow", "0 1px 10px rgba(0,0,0,.3)");
      $(".menu div").css("backgroundColor", "black");
      $("ul").css("borderRadius", "0");
   } else {
      $("nav").css("backgroundColor", "");
      $(".brand a, ul a").css("color", "");
      $("nav").css("boxShadow", "");
      $(".menu div").css("backgroundColor", "");
      $("ul").css("borderRadius", "15px 0 0 0");
   }
});


// => Link on Click
$("ul a").on("click", function (e) {
   $("ul").removeClass("ulAction");
   $(".menu").removeClass("toggle");
   $("ul li").each(function (i) {
      setTimeout(function () {
         $("ul li").eq(i).removeClass("liAction");
      }, 200 * (i + 1));
   });

   var tujuan = $(this).attr("href");
   const yOffset = -40;
   const element = $(tujuan)[0];
   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
   window.scrollTo({
      top: y,
      behavior: 'smooth'
   });
   e.preventDefault();
});


//  => Menu on Click
$(".menu").on("click", function () {
   $(this).toggleClass("toggle");
   $("ul").toggleClass("ulAction");

   $("ul li").each(function (i) {
      setTimeout(function () {
         $("ul li").eq(i).toggleClass("liAction");
      }, 200 * (i + 1));
   });
});