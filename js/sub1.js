$(function () {
  // scroll
  // scroll
  // scroll
  let baseline = -350;
  let baseline1 = -550;

  const con1 = $("#con1").offset().top + baseline;
  const con2 = $("#con2").offset().top + baseline;
  const con3 = $("#con3").offset().top + baseline1;
  let file1 = $("#con1 .file1").offset().top + baseline1;
  let file2 = $("#con1 .file2").offset().top + baseline1;
  let file3 = $("#con1 .file3").offset().top + baseline1;
  console.log("con2위치:" + con2);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    console.log(scroll);
    if (scroll >= file1) {
      $("#con1 .file1").addClass("on");
    }
    if (scroll >= file2) {
      $("#con1 .back11").addClass("on");
      $("#con1 .file2").addClass("on");
    }
    if (scroll >= file3) {
      $("#con1 .back12").addClass("on");
      $("#con1 .file3").addClass("on");
    }
    if (scroll >= con1 && scroll < con2) {
      $("#con1 .con_title").addClass("on");
    }

    if (scroll >= con2 && scroll < con3) {
      $("#con2 .con_title").addClass("on");
      $(".cardbox").addClass("on");
      $("#con2 li").addClass("on");
    }
    if (scroll >= con3) {
      $("#con3 .box3").addClass("on");
    }
  });

  //burger
  //burger
  //burger
  $(".burger").on("click", function () {
    $(".burgeropen").stop().toggleClass("on");

    $(".burger div:nth-child(1)").toggleClass("on");
    $(".burger div:nth-child(2)").toggleClass("on");
    $(".burger div:nth-child(3)").toggleClass("on");
  });

  $(".burger").on("mouseenter", function () {
    $("header").stop().addClass("on");
  });

  // header
  // header
  // header
  $(".headerline").stop().addClass("on");
  $("header").on("mouseenter", function () {
    $(".logo img").eq(1).stop().removeClass("on");
    $(".logo img").eq(0).stop().addClass("on");

    $(".menu ul").stop().addClass("on");
    $(this).stop().addClass("on");
  });
  $("header").on("mouseleave", function () {
    $(".logo img").eq(0).stop().removeClass("on");
    $(".logo img").eq(1).stop().addClass("on");
    $(".menu ul").stop().removeClass("on");
    $(this).stop().removeClass("on");
  });

  // con1
  // con1
  // con1

  // con2
  // con2
  // con2

  // con3
  // con3
  // con3

  // con4
  // con4
  // con4

  // footer
  // footer
  // footer
  $(".base").on("click", function () {
    $(".base span").stop().toggleClass("on");
    $(".up div").stop().toggleClass("on");
  });
});
