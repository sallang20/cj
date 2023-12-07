$(function () {
  // scroll
  // scroll
  // scroll
  let baseline = -350;
  let baseline1 = -700;
  let baseline2 = -1080;

  const con1 = $("#con1").offset().top + baseline;
  const con1mo = $("#con1mo").offset().top + baseline;
  const con2 = $("#con2").offset().top + baseline;
  const con3 = $("#con3").offset().top + baseline;

  let wrap1 = $(".wrap1").offset().top + baseline1;
  let wrap2 = $(".wrap2").offset().top + baseline2;

  let con3li = $("#con3 li").offset().top + baseline1;

  console.log("con2위치:" + con2);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    console.log(scroll);

    if (scroll >= wrap1) {
      $(".wrap1").addClass("on");
    }
    if (scroll >= wrap2) {
      $(".wrap2").addClass("on");
    }
    if (scroll >= con3li) {
      $("#con3 li").addClass("on");
    }
    if (scroll >= con1 && scroll < con2) {
      $("#con1 .con_title").addClass("on");
    }
    if (scroll >= con1mo && scroll < con2) {
      $("#con1mo .con_title").addClass("on");
    }
    if (scroll >= con2 && scroll < con3) {
      $("#con2 .con_title").addClass("on");
      $("#con2 ul").addClass("on");
      $("#con2>p").addClass("on");
    }
    if (scroll >= con3) {
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

  $(".wrap1 .navi div").on("click", function () {
    $(".wrap1 .navi div").stop().removeClass("on");
    $(this).stop().addClass("on");

    let i = $(this).index(".wrap1 .navi div");
    $(".wrap1 li").stop().fadeOut();
    $(".wrap1 li").eq(i).stop().fadeIn();
  });

  $(".wrap2 .navi div").on("click", function () {
    $(".wrap2 .navi div").stop().removeClass("on");
    $(this).stop().addClass("on");

    let t = $(this).index(".wrap2 .navi div");
    $(".wrap2 li").stop().fadeOut();
    $(".wrap2 li").eq(t).stop().fadeIn();
  });

  // con2
  // con2
  // con2
  $("#con2 li").on("mouseenter", function () {
    let s = $(this).index();
    $("#con2 li h3").eq(s).stop().addClass("on");
    $("#con2 li div").eq(s).addClass("on");
  });
  $("#con2 li").on("mouseleave", function () {
    $("#con2 li h3").stop().removeClass("on");
    $("#con2 li div").stop().removeClass("on");
  });

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
