$(function () {
  $(".sp-menu-btn").on("click", function () {
    $("#nav-sp").css("display") === "none"
      ? $("#nav-sp").css("display", "block")
      : $("#nav-sp").css("display", "none");

    $(this).toggleClass("active");
    return false;
  });

  // カルーセル
  $(".carousel").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
  });

  // AOSの設定
  AOS.init({
    duration: 2000,
    offset: 100,
    once: true,
  });
});
