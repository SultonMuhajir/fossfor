// => Window on Scroll
$(window).on("scroll", function () {
   if ($(this).scrollTop() >= 2) {
      $("nav").css({
         "backgroundColor": "#eee",
         "boxShadow": "0 1px 10px rgba(0,0,0,.3)"
      })
      $("nav a").css("color", "black");
      $("nav ul").css("borderRadius", "0");
      $("nav span").css("backgroundColor", "black");
   } else {
      $("nav").css({
         "backgroundColor": "",
         "boxShadow": ""
      })
      $("nav a").css("color", "");
      $("nav ul").css("borderRadius", "15px 0 0 0");
      $("nav span").css("backgroundColor", "");
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

   const tujuan = $(this).attr("href");
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
$("nav .menu").on("click", function () {
   $(this).toggleClass("toggle");
   $("nav ul").toggleClass("ulAction");
   $("nav li").each(function (i) {
      setTimeout(function () {
         $("nav li").eq(i).toggleClass("liAction");
      }, 150 * (i + 1));
   });
});