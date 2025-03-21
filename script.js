$(function () {
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
