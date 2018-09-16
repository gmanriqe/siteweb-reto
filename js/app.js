// acordion

function onReady() {
  $(window).on("load click", function() {
    $('[aria-expanded="true"]')
      .parents(".card-header")
      .addClass("acordeon_border");

    $('[aria-expanded="false"]')
      .parents(".card-header")
      .removeClass("acordeon_border");
  });

  $(window).on('load resize scroll',function () { 
    var heightBanner = $('.main_banner').height();
    var sizeScroll = $(window).scrollTop();
    // debugger
    if(sizeScroll > heightBanner){
        // $('.navbar').addClass('menu_calificalo');
        $('.navbar').css({
            'background-color':'rgba(0,0,0,.4)'
        })
    }else {
        // $('.navbar').removeClass('menu_calificalo');
        $('.navbar').css({
            'background-color':'transparent'
        })
    }
  });
}

$(document).ready(onReady);
