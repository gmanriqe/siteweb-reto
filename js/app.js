
function onReady() {
  // acordion
  $(window).on("load click", function() {
    $('[aria-expanded="true"]')
      .parents(".card-header")
      .addClass("acordeon_border");

    $('[aria-expanded="false"]')
      .parents(".card-header")
      .removeClass("acordeon_border");
  });

  // menu
  $(window).on("load resize scroll", function() {
    var widthtBanner = $(".main_banner").width();
    console.log(widthtBanner);
    if (widthtBanner < 992) {
      $(".navbar").css({
        "background-color": "rgba(0,0,0,.6)"
      });
      $(".menu").css({
        "background-color": "rgba(0,0,0,.6)",
        "padding-bottom": "10px"
      });
    } else {
      $(".navbar").css({
        "background-color": "transparent"
      });
      $(".menu").css({
        "background-color": "transparent"
      });
    }
  });
}

$(document).ready(onReady);
