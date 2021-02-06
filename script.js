// => Window on Scroll
$(window).on("scroll", function () {
   if ($(this).scrollTop() >= 2) {
      $("nav").css("backgroundColor", "#222");
      $("nav ul").css("borderRadius", "0");
   } else {
      $("nav").css("backgroundColor", "initial");
      $("nav ul").css("borderRadius", "15px 0 0 0");
   }
});


// => Link on Click
$("nav li a").on("click", function (e) {
   $("nav ul").removeClass("ulAction");
   $("nav .menu").removeClass("toggle");
   $("nav li").each(function (i) {
      setTimeout(function () {
         $("nav li").eq(i).removeClass("liAction");
      }, 150 * (i + 1));
   });
});


//  => Menu on Click
$("nav .menu").on("click", function () {
   $(this).toggleClass("toggle");
   $("nav ul").toggleClass("ulAction");
   $("nav li").each(function (i) {
      setTimeout(function () {
         $("nav li").eq(i).toggleClass("liAction");
      }, 150 * (i + 1));
   });
});