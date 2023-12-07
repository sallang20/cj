$(function () {
  // scroll
  // scroll
  // scroll
  let baseline = -330;

  const con1 = $("#con1").offset().top + baseline;
  const con2 = $("#con2").offset().top + baseline;
  const con3 = $("#con3").offset().top + baseline;
  const con4 = $("#con4").offset().top + baseline;
  const con5 = $("#con5").offset().top + baseline;

  console.log("con2위치:" + con2);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);
    $("#mainnavi li").removeClass("on");
    $("#mainnavi li").removeClass("on1");
    if (scroll >= con1 && scroll < con2) {
      $("#mainnavi li").eq(0).addClass("on");
    }
    if (scroll >= con2 && scroll < con3) {
      $("#mainnavi li").eq(1).addClass("on");
    }
    if (scroll >= con3 && scroll < con4) {
      $("#mainnavi li").eq(2).addClass("on1");
      $("#con3 .contitle").addClass("on");
      $("#con3 .all3").addClass("on");
    }
    if (scroll >= con4 && scroll < con5) {
      $("#mainnavi li").eq(3).addClass("on1");
      $("#con4 .contitle").addClass("on");
      $("#con4 .wrap4").addClass("on");
    }
    if (scroll >= con5) {
      $("#mainnavi li").eq(4).addClass("on1");
      $("#con5 .contitle").addClass("on");
      $("#con5 .wrap5").addClass("on");
    }
    if (scroll >= con3) {
      $("header").on("mouseenter", function () {
        $(".logo img").eq(0).stop().addClass("on");
        $(".logo img").eq(1).stop().removeClass("on");
        $(".headerline").stop().addClass("on2");
      });
      $("header").on("mouseleave", function () {
        $(".logo img").eq(0).stop().addClass("on");
        $(".logo img").eq(1).stop().removeClass("on");

        $(".headerline").removeClass("on2");
      });
      $(".logo img").eq(0).stop().addClass("on");
      $(".logo img").eq(1).stop().removeClass("on");
      $(".logo1 img").eq(0).stop().addClass("on");
      $(".logo1 img").eq(1).stop().removeClass("on");
      $(".headerline").stop().addClass("on1");
      $(".menu > li > a").stop().addClass("on1");
      $(".burger div").stop().addClass("on1");
      $("#mainnavi li div").stop().addClass("on1");
      $("header").stop().addClass("on2");
    } else {
      $("header").on("mouseleave", function () {
        $(".logo img").eq(1).stop().addClass("on");
        $(".logo img").eq(0).stop().removeClass("on");
      });
      $(".logo img").eq(1).stop().addClass("on");
      $(".logo img").eq(0).stop().removeClass("on");
      $(".logo1 img").eq(1).stop().addClass("on");
      $(".logo1 img").eq(0).stop().removeClass("on");
      $(".headerline").stop().removeClass("on1");
      $(".menu > li > a").stop().removeClass("on1");
      $(".burger div").stop().removeClass("on1");
      $("#mainnavi li div").stop().removeClass("on1");
      $("header").stop().removeClass("on2");
    }
  });
  // mainnavi
  // mainnavi
  // mainnavi
  $("#mainnavi li").on("click", function () {
    target = $(this).children("a").attr("href");
    targetpos = $(target).offset().top;
    movescroll(targetpos);
  });

  function movescroll(targetpos) {
    $("html, body").stop().animate({ scrollTop: targetpos }, 1000);
  }

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

  $(function () {
    let i1 = 0;
    let total1 = $(".slide1 li").length;
    //console.log(total1)

    //자동넘김
    let timer1 = setInterval(start1, 5000);

    // 앞으로 슬라이드 함수

    $(".navi1 .in1").eq(0).addClass("on");
    $(".navi1 .out1").eq(0).addClass("on");
    $(".maintitle .top").eq(0).addClass("on");
    $(".maintitle .bottom").eq(0).addClass("on");
    function start1() {
      i1++;
      $(".navi1 .out1").removeClass("on");
      $(".navi1 .in1").removeClass("on");
      $(".maintitle .top").removeClass("on");
      $(".maintitle .bottom").removeClass("on");
      if (i1 == total1 - 1) {
        $(".slide1")
          .stop()
          .animate({ marginLeft: "-300%" }, function () {
            $(".slide1").css({ marginLeft: "0" });
          });

        i1 = 0;
        $(".navi1 .out1").eq(i1).addClass("on");
        $(".navi1 .in1").eq(i1).addClass("on");
        $(".maintitle .top").eq(i1).addClass("on");
        $(".maintitle .bottom").eq(i1).addClass("on");
      } else {
        $(".slide1")
          .stop()
          .animate({ marginLeft: `${-i1 * 100}%` });
        $(".navi1 .out1").eq(i1).addClass("on");
        $(".navi1 .in1").eq(i1).addClass("on");
        $(".maintitle .top").eq(i1).addClass("on");
        $(".maintitle .bottom").eq(i1).addClass("on");
      }
    }

    // 다음버튼 클릭시 이벤트
    $(".next1").click(function () {
      clearInterval(timer1);
      start1();
      timer1 = setInterval(start1, 5000);
    });

    // 뒤로 슬라이드 함수
    function back1() {
      i1--;
      $(".navi1 .out1").removeClass("on");
      $(".navi1 .in1").removeClass("on");
      $(".maintitle .top").removeClass("on");
      $(".maintitle .bottom").removeClass("on");
      if (i1 < 0) {
        $(".slide1").css({ marginLeft: "-300%" });
        $(".slide1").stop().animate({ marginLeft: "-200%" });
        $(".navi1 .out1").eq(i1).addClass("on");
        $(".navi1 .in1").eq(i1).addClass("on");
        $(".maintitle .top").eq(i1).addClass("on");
        $(".maintitle .bottom").eq(i1).addClass("on");

        i1 = 2;
      } else {
        $(".slide1").animate({ marginLeft: `${-i1 * 100}%` });
        $(".navi1 .out1").eq(i1).addClass("on");
        $(".navi1 .in1").eq(i1).addClass("on");
        $(".maintitle .top").eq(i1).addClass("on");
        $(".maintitle .bottom").eq(i1).addClass("on");
      }
    }

    // 이전버튼 클릭시 이벤트
    $(".prev1").click(function () {
      clearInterval(timer1);
      back1();
      timer1 = setInterval(start1, 5000);
    });

    // 네비버튼 클릭시 이벤트

    $(".navi1 .out1").click(function () {
      clearInterval(timer1);
      i1 = $(this).index();
      //console.log(i);
      $(".navi1 .out1").removeClass("on");
      $(".navi1 .in1").removeClass("on");
      $(".maintitle .top").removeClass("on");
      $(".maintitle .bottom").removeClass("on");
      $(this).addClass("on");
      $(".navi1 .in1").eq(i1).addClass("on");
      $(".maintitle .top").eq(i1).addClass("on");
      $(".maintitle .bottom").eq(i1).addClass("on");

      $(".slide1")
        .stop()
        .animate({ marginLeft: `${-i1 * 100}%` });
      timer1 = setInterval(start1, 5000);
    });
  });

  // con2
  // con2
  // con2

  $(".con2wrap > div").on("mouseenter", function () {
    i2 = $(this).index();
    $(".backcolor").eq(i2).addClass("on");
    $(".in2").eq(i2).addClass("on");
  });
  $(".con2wrap > div").on("mouseleave", function () {
    $(".backcolor").removeClass("on");
    $(".in2").removeClass("on");
  });

  // con3
  // con3
  // con3

  let total3 = $(".big3 li").length;
  let i3 = 0;
  let timer3;

  start3();
  //자동반복
  function start3() {
    timer3 = setInterval(function () {
      if (i3 == total3 - 1) {
        i3 = 0;
      } else {
        i3++;
      }
      fade3();
    }, 7000);
  }

  //다음버튼

  $(".next3").on("click", function () {
    clearInterval(timer3);
    if (i3 == total3 - 1) {
      i3 = 0;
    } else {
      i3++;
    }
    fade3();
    start3();
  });

  //이전버튼
  $(".prev3").on("click", function () {
    clearInterval(timer3);
    if (i3 == 0) {
      i3 = total3 - 1;
    } else {
      i3--;
    }
    fade3();
    start3();
  });

  //내비버튼
  $(".navi3 li").on("click", function () {
    clearInterval(timer3);
    i3 = $(this).index();
    j3 = $(this).hasClass("on");
    //hasClass는 클래스가 있는지 없는지를 체크할 수 있음. 클래스가 있으면 true, 클래스가 없으면 false를 반환함
    //console.log(j);
    if (j3 == true) {
      fadeOn3();
      start3();
    } else {
      fade3();
      start3();
    }
  });

  function fade3() {
    $(".slide31 li").fadeOut();
    $(".slide31 li").eq(i3).fadeIn();
    $(".slide32 li").fadeOut();
    $(".slide32 li").eq(i3).fadeIn();
    $(".slide33 li").fadeOut();
    $(".slide33 li").eq(i3).fadeIn();
    $(".slide34 li").fadeOut();
    $(".slide34 li").eq(i3).fadeIn();
    $(".slide35 li").fadeOut();
    $(".slide35 li").eq(i3).fadeIn();
    $(".navi3 li").removeClass("on");
    $(".navi3 li").eq(i3).addClass("on");
    $(".text3").fadeOut();
    $(".text3").eq(i3).fadeIn();
  }
  function fadeOn3() {
    $(".slide31 li").fadeOut();
    $(".slide31 li").eq(i3).fadeIn();
    $(".slide32 li").fadeOut();
    $(".slide32 li").eq(i3).fadeIn();
    $(".slide33 li").fadeOut();
    $(".slide33 li").eq(i3).fadeIn();
    $(".slide34 li").fadeOut();
    $(".slide34 li").eq(i3).fadeIn();
    $(".slide35 li").fadeOut();
    $(".slide35 li").eq(i3).fadeIn();
    $(".navi3 li").removeClass("on");
    $(".navi3 li").eq(i3).addClass("on");
    $(".text3").fadeOut();
    $(".text3").eq(i3).fadeIn();
  }

  // con4
  // con4
  // con4
  $(function () {
    let i4 = 0;
    let total4 = $(".imagebox4 li").length;
    //console.log(total4)

    // 앞으로 슬라이드 함수
    function start4() {
      i4++;
      $(".navi4 li").removeClass("on");
      $(".text4").removeClass("on");
      if (i4 == total4 - 1) {
        $(".imagebox4 ul")
          .stop()
          .animate({ marginLeft: "-300%" }, function () {
            $(".imagebox4 ul").css({ marginLeft: "0" });
          });
        i4 = 0;
        $(".navi4 li").eq(i4).addClass("on");
        $(".text4").eq(i4).addClass("on");
      } else {
        $(".imagebox4 ul")
          .stop()
          .animate({ marginLeft: `${-i4 * 100}%` });
        $(".navi4 li").eq(i4).addClass("on");
        $(".text4").eq(i4).addClass("on");
      }
    }

    // 다음버튼 클릭시 이벤트
    $(".next4").click(function () {
      start4();
    });

    // 뒤로 슬라이드 함수
    function back4() {
      i4--;
      $(".navi4 li").removeClass("on");
      $(".text4").removeClass("on");
      if (i4 < 0) {
        $(".imagebox4 ul").css({ marginLeft: "-300%" });
        $(".imagebox4 ul").stop().animate({ marginLeft: "-200%" });
        i4 = 2;
        $(".navi4 li").eq(i4).addClass("on");
        $(".text4").eq(i4).addClass("on");
      } else {
        $(".imagebox4 ul").animate({ marginLeft: `${-i4 * 100}%` });
        $(".navi4 li").eq(i4).addClass("on");
        $(".text4").eq(i4).addClass("on");
      }
    }

    // 이전버튼 클릭시 이벤트
    $(".prev4").click(function () {
      back4();
    });

    // 네비버튼 클릭시 이벤트
    $(".navi4 li ").click(function () {
      i4 = $(this).index();
      //console.log(i);
      $(".navi4 li").removeClass("on");
      $(".text4").removeClass("on");
      $(".text4").eq(i4).addClass("on");
      $(this).addClass("on");
      $(".imagebox4 ul")
        .stop()
        .animate({ marginLeft: `${-i4 * 100}%` });
    });
  });

  // con5
  // con5
  // con5
  $(".textbox5").on("mouseenter", function () {
    i5 = $(this).index(".textbox5");
    $(this).stop().addClass("on");
    $(".text5 h4").eq(i5).addClass("on");
  });
  $(".textbox5").on("mouseleave", function () {
    $(this).removeClass("on");
    $(".text5 h4").removeClass("on");
  });

  // footer
  // footer
  // footer
  $(".base").on("click", function () {
    $(".base span").stop().toggleClass("on");
    $(".up div").stop().toggleClass("on");
  });
});
